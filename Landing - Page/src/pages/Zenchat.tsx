import { useMemo, useState, useRef, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type Chat = { id: string; name: string; messages: { id: string; role: 'user' | 'ai'; text: string }[] };

export default function Zenchat() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [chats, setChats] = useState<Chat[]>([
    { id: 'c1', name: 'Greeting exchange', messages: [{ id: 'm1', role: 'ai', text: 'Welcome to Zenchat. How can I help you today?' }] },
  ]);
  const [activeId, setActiveId] = useState<string>('c1');
  const [input, setInput] = useState('');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.25;
      videoRef.current.play().catch(() => {
        // Video autoplay failed, will use poster or fallback
      });
    }
  }, []);

  const active = useMemo(() => chats.find((c) => c.id === activeId)!, [chats, activeId]);
  const hasMessages = active?.messages.length > 0;

  const send = () => {
    if (!input.trim()) return;
    setChats((list) =>
      list.map((c) => (c.id === activeId ? { ...c, messages: [...c.messages, { id: crypto.randomUUID(), role: 'user', text: input.trim() }] } : c))
    );
    setInput('');
  };

  const newChat = () => {
    const id = crypto.randomUUID();
    setChats((list) => [{ id, name: 'New chat', messages: [] }, ...list]);
    setActiveId(id);
  };

  const rename = (id: string) => {
    const name = prompt('Rename chat to?');
    if (!name) return;
    setChats((list) => list.map((c) => (c.id === id ? { ...c, name } : c)));
  };

  const remove = (id: string) => {
    setChats((list) => list.filter((c) => c.id !== id));
    if (activeId === id && chats.length > 1) setActiveId(chats[0].id);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 grid grid-cols-[300px_1fr] gap-0 min-h-screen">
        {/* Sidebar */}
        <aside className="bg-black text-white border-r border-white/10 flex flex-col relative z-10">
          {/* Back Button */}
          <div className="px-4 pt-6 pb-4">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-white hover:text-emerald-300 font-medium transition-colors duration-300"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back</span>
            </button>
          </div>
          
          {/* Welcome Message / Tagline */}
          <div className="px-4 py-4 mb-4">
            <p className="text-white text-sm leading-relaxed">
              Welcome to Zenchat. Your AI companion for mindful healing and spiritual growth. How can I support your journey today?
            </p>
          </div>
          
          {/* Title and New Chat Button - with increased top margin */}
          <div className="flex items-center justify-between px-4 py-4 mt-4">
            <h2 className="font-semibold text-lg text-white">Zenchat</h2>
            <button 
              aria-label="New chat" 
              className="rounded-full w-8 h-8 bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center transition-colors" 
              onClick={newChat}
            >
              +
            </button>
          </div>
          
          {/* Chat List */}
          <div className="flex-1 overflow-y-auto mt-4">
            {chats.map((c) => (
              <div key={c.id} className={`group flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-white/10 ${activeId === c.id ? 'bg-white/10' : ''}`}
                   onClick={() => setActiveId(c.id)}>
                <span className="truncate">{c.name}</span>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                  <button className="text-xs underline" onClick={(e) => { e.stopPropagation(); rename(c.id); }}>rename</button>
                  <button className="text-xs underline" onClick={(e) => { e.stopPropagation(); remove(c.id); }}>delete</button>
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Chat */}
        <main className="flex flex-col h-screen relative">
          {/* Video Background - Only in chat section */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
            onLoadedMetadata={(e) => {
              const video = e.target as HTMLVideoElement;
              video.playbackRate = 0.25;
            }}
          >
            <source src="/zenchatbgvd.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 backdrop-blur-sm bg-slate-900/50" style={{ zIndex: 1 }} />
          
          {!hasMessages ? (
            /* New Chat - Input centered in middle */
            <div className="flex-1 flex items-center justify-center relative z-10">
              <div className="text-center w-full px-6">
                <h1 className="text-5xl font-bold text-white mb-8" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.3)' }}>
                  What's on your mind today?
                </h1>
                <div className="w-1/2 mx-auto bg-white/95 rounded-2xl shadow-xl border border-emerald-200/50 flex items-center gap-3 p-3">
                  <input
                    className="flex-1 outline-none bg-transparent px-2"
                    placeholder="Ask anything"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && send()}
                  />
                  <button className="btn-spiritual" onClick={send}>Send</button>
                </div>
              </div>
            </div>
          ) : (
            /* Existing Chat - Messages with input at bottom */
            <>
              <div className="flex-1 overflow-y-auto p-6 space-y-4 relative z-10">
                {active?.messages.map((m) => (
                  <div key={m.id} className={`max-w-2xl ${m.role === 'user' ? 'ml-auto text-right' : ''}`}>
                    <div className={`rounded-2xl px-4 py-3 ${m.role === 'user' ? 'bg-emerald-500 text-white' : 'bg-white/80 backdrop-blur'} `}>{m.text}</div>
                  </div>
                ))}
              </div>
              {/* Input Field - centered, half width, near bottom */}
              <div className="px-6 pb-6 flex justify-center relative z-10">
                <div className="w-1/2 bg-white/95 rounded-2xl shadow-xl border border-emerald-200/50 flex items-center gap-3 p-3" style={{ marginBottom: '16px' }}>
                  <input
                    className="flex-1 outline-none bg-transparent px-2"
                    placeholder="Ask anything"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && send()}
                  />
                  <button className="btn-spiritual" onClick={send}>Send</button>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}


