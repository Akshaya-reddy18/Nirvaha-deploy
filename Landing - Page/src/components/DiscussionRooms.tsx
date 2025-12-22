import React, { useState, useEffect, useRef, FormEvent, ChangeEvent } from "react";
import axios from "axios";
import io, { Socket } from "socket.io-client";
import * as timeago from "timeago.js";
import { BACKEND_CONFIG } from "../config/backend";

interface Room {
	_id: string;
	name: string;
	userCount?: number;
}

interface ChatMessage {
	username?: string;
	text: string;
	timestamp?: number;
	_id?: string;
	roomId?: string;
}



type ServerToClientEvents = {
	"message history": (msgs: ChatMessage[]) => void;
	"chat message": (msg: ChatMessage) => void;
	"show typing": (name: string) => void;
	"hide typing": () => void;
	"online count": (data: { room: string; count: number }) => void;
};

type ClientToServerEvents = {
	"chat message": (msg: { username: string; text: string; room: string; isAnonymous: boolean }) => void;
	"join room": (data: { username: string; room: string; isAnonymous: boolean }) => void;
	"leave room": (data: { username: string; room: string }) => void;
	typing: (data: { username: string; room: string }) => void;
	"stop typing": (data: { room: string }) => void;
};

// Enhanced socket configuration to handle CORS issues
const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(BACKEND_CONFIG.SOCKET_BASE_URL, {
	transports: ['polling'],
	upgrade: false,
	rememberUpgrade: false,
	timeout: 20000,
	forceNew: true,
	reconnection: true,
	reconnectionAttempts: 10,
	reconnectionDelay: 1000,
	reconnectionDelayMax: 5000,
	autoConnect: true,
	withCredentials: false,
	path: '/socket.io/',
	extraHeaders: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
		"Access-Control-Allow-Headers": "Content-Type, Authorization"
	}
});

// Enhanced connection status hook
function useSocketStatus(socket: Socket<any, any>) {
	const [connected, setConnected] = useState(socket.connected);
	const [isConnecting, setIsConnecting] = useState(false);
	const [connectionError, setConnectionError] = useState<string | null>(null);

	useEffect(() => {
		const onConnect = () => {
			setConnected(true);
			setIsConnecting(false);
			setConnectionError(null);
		};
		
		const onDisconnect = (reason: string) => {
			setConnected(false);
			setIsConnecting(false);
			if (reason === 'io server disconnect') {
				setConnectionError('Server disconnected');
			} else if (reason === 'io client disconnect') {
				setConnectionError('Client disconnected');
			} else {
				setConnectionError('Connection lost');
			}
		};

		const onConnectError = (error: Error) => {
			setConnected(false);
			setIsConnecting(false);
			if (error.message.includes('CORS')) {
				setConnectionError('CORS policy blocked connection. Please check backend configuration.');
			} else if (error.message.includes('xhr poll error')) {
				setConnectionError('Network error. Please check your connection.');
			} else {
				setConnectionError(`Connection error: ${error.message}`);
			}
		};

		const onConnecting = () => {
			setIsConnecting(true);
			setConnectionError(null);
		};

		socket.on("connect", onConnect);
		socket.on("disconnect", onDisconnect);
		socket.on("connect_error", onConnectError);
		socket.on("connecting", onConnecting);

		return () => {
			socket.off("connect", onConnect);
			socket.off("disconnect", onDisconnect);
			socket.off("connect_error", onConnectError);
			socket.off("connecting", onConnecting);
		};
	}, [socket]);

	return { connected, isConnecting, connectionError };
}

export default function DiscussionRooms() {
	const { connected, isConnecting, connectionError } = useSocketStatus(socket);
	const [showSocketError, setShowSocketError] = useState(true);
	const [showNameDialog, setShowNameDialog] = useState(true);
	const [username, setUsername] = useState("");
	const [isAnonymous, setIsAnonymous] = useState(false);
	const [rooms, setRooms] = useState<Room[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

	// Chat state
	const [messages, setMessages] = useState<ChatMessage[]>([]);
	const [messageText, setMessageText] = useState<string>("");
	const [typingUser, setTypingUser] = useState<string>("");
	const [onlineCount, setOnlineCount] = useState<number>(0);
	
	// Room online counts state
	const [roomOnlineCounts, setRoomOnlineCounts] = useState<Record<string, number>>({});

	const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const messagesEndRef = useRef<HTMLDivElement | null>(null);

	// Auto-scroll to bottom when new messages arrive
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
	}, [messages]);

	useEffect(() => {
		if (!showNameDialog) {
			setLoading(true);
			axios
				.get<Room[]>(`${BACKEND_CONFIG.API_BASE_URL}/api/rooms`)
				.then((res) => setRooms(res.data))
				.catch(() => setError("Failed to load rooms."))
				.then(() => setLoading(false));
		}
	}, [showNameDialog]);

	// Global online count listener for all rooms
	useEffect(() => {
		const handleOnlineCount = ({ room: r, count }: { room: string; count: number }) => {
			setRoomOnlineCounts(prev => ({
				...prev,
				[r]: count
			}));
		};

		socket.on("online count", handleOnlineCount);

		return () => {
			socket.off("online count", handleOnlineCount);
		};
	}, []);

	// Enhanced chat socket logic
	useEffect(() => {
		if (!selectedRoom || !username) return;

		// Join room with anonymous status
		socket.emit("join room", { 
			username, 
			room: selectedRoom.name, 
			isAnonymous 
		});
		
		setMessages([]);

		// Set up all socket listeners
		socket.on("message history", msgs => {
			setMessages(msgs);
		});

		socket.on("chat message", msg => {
			setMessages(prev => [...prev, msg]);
			setTypingUser("");
		});

		socket.on("show typing", name => {
			if (name !== username) setTypingUser(name);
		});

		socket.on("hide typing", () => {
			setTypingUser("");
		});

		socket.on("online count", ({ room: r, count }) => {
			// Update the selected room's online count for the header
			if (r === selectedRoom.name) setOnlineCount(count);
		});

		// Cleanup function
		return () => {
			socket.emit("leave room", { username, room: selectedRoom.name });
			socket.emit("stop typing", { room: selectedRoom.name });
			socket.off("message history");
			socket.off("chat message");
			socket.off("show typing");
			socket.off("hide typing");
			socket.off("online count");
		};
	}, [selectedRoom, username, isAnonymous]);

	const handleNameSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setShowNameDialog(false);
		if (!username.trim()) {
			setUsername("Anonymous");
			setIsAnonymous(true);
		} else {
			setIsAnonymous(false);
		}
	};



	const handleJoinRoom = (room: Room) => {
		setSelectedRoom(room);
		setMessages([]);
		setOnlineCount(0);
	};

	const handleLeaveRoom = () => {
		if (selectedRoom && username) {
			socket.emit("leave room", { username, room: selectedRoom.name });
		}
		setSelectedRoom(null);
		setMessages([]);
		setOnlineCount(0);
	};

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (messageText.trim() && selectedRoom && username) {
			socket.emit("chat message", { 
				username, 
				text: messageText, 
				room: selectedRoom.name,
				isAnonymous 
			});
			setMessageText("");
			socket.emit("stop typing", { room: selectedRoom.name });
		}
	};

	const handleTyping = (e: ChangeEvent<HTMLInputElement>) => {
		setMessageText(e.target.value);
		if (selectedRoom && username) {
			socket.emit("typing", { username, room: selectedRoom.name });
			if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
			typingTimeoutRef.current = setTimeout(() => {
				socket.emit("stop typing", { room: selectedRoom.name });
			}, 1500);
		}
	};

	const retryConnection = () => {
		socket.connect();
		setShowSocketError(true);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 pt-20">
			{/* Enhanced Socket connection error toast */}
			{showNameDialog === false && (!connected || connectionError) && showSocketError && (
				<div className="fixed bottom-6 right-6 z-50 flex items-center gap-4 bg-red-500 text-white px-6 py-4 rounded-2xl shadow-2xl animate-pulse max-w-md border border-red-400">
					<div className="flex-1">
						<div className="font-semibold mb-1 flex items-center gap-2">
							<div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
							{isConnecting ? "Connecting..." : "Connection Error"}
						</div>
						<div className="text-sm opacity-90">
							{connectionError || "Not connected to chat server. Check backend and CORS settings."}
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<button
							onClick={retryConnection}
							className="px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white font-semibold text-sm transition-all border border-white/30"
						>
							🔄 Retry
						</button>
						<button
							onClick={() => setShowSocketError(false)}
							className="px-3 py-1 rounded-lg bg-white/20 hover:bg-white/30 text-white font-bold text-lg transition-all"
							aria-label="Dismiss error"
						>
							×
						</button>
					</div>
				</div>
			)}

			{/* Enhanced Name Dialog Modal */}
			{showNameDialog && (
				<div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/40 w-full h-full transition-all">
					<div className="relative">
						{/* Background decoration */}
						<div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl blur-xl opacity-20"></div>
						
						<form
							onSubmit={handleNameSubmit}
							className="relative bg-white rounded-3xl shadow-2xl p-12 w-full max-w-md flex flex-col items-center border border-emerald-100"
						>
							{/* Header with icon */}
							<div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
								<span className="text-2xl">💬</span>
							</div>
							
							<h2 className="text-3xl font-bold mb-2 text-gray-800 text-center">Welcome to Discussion Rooms</h2>
							<p className="text-gray-600 text-center mb-8">Choose your display name to get started</p>
							
							<div className="w-full mb-6">
								<label className="block text-sm font-medium text-gray-700 mb-2">Display Name</label>
								<input
									className="w-full border-2 border-gray-200 rounded-xl px-5 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 bg-gray-50 placeholder:text-gray-400 transition-all"
									placeholder="Enter your name or stay anonymous"
									value={username}
									onChange={e => setUsername(e.target.value)}
									autoFocus
									maxLength={20}
								/>
							</div>
							
							<button
								type="submit"
								className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:from-emerald-600 hover:to-teal-600 transition-all transform hover:scale-105"
							>
								🚀 Join Discussion
							</button>
							
							<p className="text-xs text-gray-500 mt-4 text-center">
								Leave empty to join as Anonymous
							</p>
						</form>
					</div>
				</div>
			)}

			{/* Main Layout Container */}
			<div className="container mx-auto px-6 py-8">
				<div className="flex flex-col lg:flex-row gap-8 h-[calc(100vh-12rem)]">
					{/* Enhanced Sidebar: Room list */}
					<aside className="w-full lg:w-80 bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col overflow-hidden">
						{/* Sidebar Header */}
						<div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
									<span className="text-xl">🏠</span>
								</div>
								<div>
									<h1 className="text-xl font-bold">Discussion Rooms</h1>
									<p className="text-emerald-100 text-sm">Join the conversation</p>
								</div>
							</div>
						</div>
						
						{/* Room List */}
						<div className="flex-1 overflow-y-auto p-4">
							{loading ? (
								<div className="flex items-center justify-center py-8">
									<div className="flex items-center gap-3 text-emerald-600">
										<div className="w-6 h-6 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
										<span className="font-medium">Loading rooms...</span>
									</div>
								</div>
							) : error ? (
								<div className="flex items-center justify-center py-8">
									<div className="text-center">
										<div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
											<span className="text-red-500 text-xl">⚠️</span>
										</div>
										<p className="text-red-600 font-medium">{error}</p>
									</div>
								</div>
							) : rooms.length === 0 ? (
								<div className="flex items-center justify-center py-8">
									<div className="text-center">
										<div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
											<span className="text-gray-500 text-xl">🏠</span>
										</div>
										<p className="text-gray-500 font-medium">No rooms available yet</p>
									</div>
								</div>
							) : (
								<div className="space-y-2">
									{rooms.map((room) => (
										<button
											key={room._id}
											className={`w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all group ${
												selectedRoom && selectedRoom._id === room._id 
													? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg transform scale-105' 
													: 'bg-gray-50 hover:bg-emerald-50 border border-gray-100 hover:border-emerald-200 hover:shadow-md'
											}`}
											onClick={() => handleJoinRoom(room)}
										>
											<div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all ${
												selectedRoom && selectedRoom._id === room._id 
													? 'bg-white/20 text-white' 
													: 'bg-gradient-to-r from-emerald-400 to-teal-400 text-white group-hover:from-emerald-500 group-hover:to-teal-500'
											}`}>
												{room.name[0]?.toUpperCase() || "?"}
											</div>
											<div className="flex-1 min-w-0">
												<h3 className={`font-semibold text-lg truncate ${
													selectedRoom && selectedRoom._id === room._id ? 'text-white' : 'text-gray-800'
												}`}>
													{room.name}
												</h3>
												<p className={`text-sm ${
													selectedRoom && selectedRoom._id === room._id ? 'text-emerald-100' : 'text-gray-500'
												}`}>
													{roomOnlineCounts[room.name] > 0 ? 'Active discussion' : 'No active users'}
												</p>
											</div>
											<div className="flex items-center gap-2">
												{/* Online indicator */}
												{roomOnlineCounts[room.name] > 0 && (
													<div className="flex items-center gap-1">
														<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
														<span className={`text-xs font-medium ${
															selectedRoom && selectedRoom._id === room._id ? 'text-emerald-100' : 'text-green-600'
														}`}>
															{roomOnlineCounts[room.name]} online
														</span>
													</div>
												)}
												
												{/* Selected room indicator */}
												{selectedRoom && selectedRoom._id === room._id && (
													<div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
												)}
											</div>
										</button>
									))}
								</div>
							)}
						</div>
					</aside>

					{/* Enhanced Main Chat Area */}
					<main className="flex-1 flex flex-col">
						{selectedRoom ? (
							<div className="flex-1 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col">
								{/* Chat Header */}
								<div className="bg-gradient-to-r from-emerald-500 to-teal-500 p-6 text-white">
									<div className="flex justify-between items-center">
										<div className="flex items-center gap-4">
											<div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
												<span className="text-xl font-bold">{selectedRoom.name[0]?.toUpperCase() || "?"}</span>
											</div>
											<div>
												<h2 className="text-2xl font-bold">{selectedRoom.name}</h2>
												<p className="text-emerald-100 text-sm">Active discussion room</p>
											</div>
										</div>
										<div className="flex items-center gap-4">
											<div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full">
												<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
												<span className="text-sm font-medium">
													{typeof onlineCount === 'number' && onlineCount >= 0 ? onlineCount : '...'} online
												</span>
											</div>
											<button
												onClick={handleLeaveRoom}
												className="bg-red-500/20 hover:bg-red-500/30 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all border border-red-400/30"
											>
												🚪 Leave Room
											</button>
										</div>
									</div>
								</div>

								{/* Messages Area */}
								<div className="flex-1 overflow-y-auto p-6 bg-gradient-to-b from-gray-50 to-white">
									{messages.length === 0 ? (
										<div className="flex items-center justify-center h-full">
											<div className="text-center">
												<div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
													<span className="text-2xl">💬</span>
												</div>
												<h3 className="text-lg font-semibold text-gray-600 mb-2">Welcome to {selectedRoom.name}!</h3>
												<p className="text-gray-500">Start the conversation by sending your first message.</p>
											</div>
										</div>
									) : (
										<div className="space-y-4">
											{messages.map((msg, idx) => (
												<div
													key={idx}
													className={`flex ${msg.username === username ? "justify-end" : "justify-start"}`}
												>
													<div className={`flex items-start gap-3 max-w-md ${msg.username === username ? "flex-row-reverse" : ""}`}>
														{/* Avatar */}
														<div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
															msg.username === username 
																? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white" 
																: "bg-gray-300 text-gray-700"
														}`}>
															{msg.username?.[0]?.toUpperCase() || "?"}
														</div>
														
														{/* Message Bubble */}
														<div
															className={`px-4 py-3 rounded-2xl shadow-sm transition-all ${
																msg.username === username
																	? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-br-md"
																	: "bg-white text-gray-800 rounded-bl-md border border-gray-200"
															}`}
														>
															{msg.username !== username && (
																<div className="text-xs font-medium mb-1 opacity-70">
																	{msg.username}
																</div>
															)}
															<div className="break-words whitespace-pre-wrap text-sm leading-relaxed">
																{msg.text}
															</div>
															<div className={`text-xs mt-2 opacity-60 ${
																msg.username === username ? "text-emerald-100" : "text-gray-500"
															}`}>
																{timeago.format(msg.timestamp || Date.now())}
															</div>
														</div>
													</div>
												</div>
											))}
											
											{/* Typing Indicator */}
											{typingUser && (
												<div className="flex justify-start">
													<div className="flex items-center gap-3">
														<div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
															<span className="text-xs font-bold">?</span>
														</div>
														<div className="bg-gray-200 text-gray-600 px-4 py-2 rounded-2xl text-sm">
															<div className="flex items-center gap-1">
																<span>💬 {typingUser} is typing</span>
																<div className="flex gap-1">
																	<div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
																	<div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
																	<div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
																</div>
															</div>
														</div>
													</div>
												</div>
											)}
											
											<div ref={messagesEndRef} />
										</div>
									)}
								</div>

								{/* Message Input */}
								<form onSubmit={handleSubmit} className="p-6 bg-white border-t border-gray-200">
									<div className="flex gap-3">
										<input
											type="text"
											autoComplete="off"
											placeholder="Type your message..."
											value={messageText}
											onChange={handleTyping}
											className="flex-1 border-2 border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 bg-gray-50 placeholder:text-gray-400 transition-all"
										/>
										<button
											type="submit"
											disabled={!messageText.trim()}
											className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-xl text-base font-semibold shadow-lg hover:from-emerald-600 hover:to-teal-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
										>
											<span>📤</span>
											Send
										</button>
									</div>
								</form>
							</div>
						) : (
							<div className="flex-1 bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center">
								<div className="text-center">
									<div className="w-20 h-20 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
										<span className="text-3xl">💬</span>
									</div>
									<h3 className="text-2xl font-bold text-gray-700 mb-3">Welcome to Discussion Rooms</h3>
									<p className="text-gray-500 text-lg">Select a room from the sidebar to start chatting!</p>
								</div>
							</div>
						)}
					</main>
				</div>
			</div>
		</div>
	);
}
