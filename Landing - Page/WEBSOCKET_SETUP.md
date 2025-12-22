# Nirvaha Website Support Chatbot - WebSocket Setup

## 🚀 WebSocket Integration Complete!

The chatbot now uses WebSockets for real-time communication with AI-powered website support responses.

### ✨ Features Added:

#### **Real-time Communication:**
- **WebSocket Connection** - Direct connection to backend AI service
- **Live Message Exchange** - Instant message sending and receiving
- **Connection Status** - Visual indicators for connection state
- **Auto-reconnection** - Automatically reconnects if connection is lost

#### **AI-Powered Responses:**
- **Website Support-Focused AI** - Responses tailored for website assistance
- **Contextual Understanding** - Recognizes bugs, navigation issues, feedback, performance problems
- **Professional Language** - Supportive and helpful responses for website users
- **Fallback System** - Local responses if WebSocket is unavailable

#### **User Experience:**
- **Connection Indicators** - WiFi icons show connection status
- **Error Handling** - Clear error messages for connection issues
- **Typing Indicators** - Shows when AI is processing responses
- **Smooth Animations** - Professional chat interface

### 🔧 Technical Implementation:

#### **WebSocket Client (Frontend):**
```typescript
// Connection management
const ws = new WebSocket(wsUrl);

// Message handling
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.type === 'bot_response') {
    // Add bot message to chat
  }
};

// Send user messages
ws.send(JSON.stringify({
  type: 'user_message',
  message: userInput,
  timestamp: new Date().toISOString()
}));
```

#### **WebSocket Server (Backend):**
```javascript
// AI response generation
function generateResponse(userMessage) {
  // Keyword-based wellness responses
  // Contextual understanding
  // Empathetic language
}
```

### 🛠️ Setup Instructions:

#### **1. Install WebSocket Server Dependencies:**
```bash
npm install ws
```

#### **2. Start the WebSocket Server:**
```bash
node websocket-server-example.js
```

#### **3. Configure Environment (Optional):**
Create `.env` file:
```
VITE_WEBSOCKET_URL=ws://localhost:8080/chat
```

#### **4. Start Frontend:**
```bash
npm run dev
```

### 📡 WebSocket Endpoints:

- **Development**: `ws://localhost:8080/chat`
- **Production**: Configure `VITE_WEBSOCKET_URL` environment variable

### 🎯 Message Protocol:

#### **Client to Server:**
```json
{
  "type": "user_message",
  "message": "I'm feeling anxious today",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

#### **Server to Client:**
```json
{
  "type": "bot_response", 
  "message": "I understand you're feeling anxious. That's completely normal. Would you like to try a breathing exercise?",
  "timestamp": "2024-01-01T12:00:01.000Z"
}
```

### 🛠️ Website Support AI Features:

#### **Contextual Responses:**
- **Bug Reports**: "I've logged this as a bug report. Our technical team will investigate and fix this issue."
- **Navigation Help**: "I can help you navigate the website. What specific information are you looking for?"
- **Feedback**: "That's helpful feedback! I'll make sure our team sees this suggestion for improvement."
- **Performance Issues**: "I understand you're experiencing performance issues. I've logged this for our technical team."
- **Account Issues**: "I can help you with account-related issues. What specific problem are you experiencing?"

#### **Fallback System:**
- **Local Responses** - 12 pre-written website support responses
- **Offline Mode** - Works without WebSocket connection
- **Error Recovery** - Graceful handling of connection issues

### 🔄 Connection Management:

- **Auto-connect** on component mount
- **Auto-reconnect** after 3 seconds if disconnected
- **Connection status** indicators in UI
- **Error messages** for connection issues
- **Graceful cleanup** on component unmount

The chatbot now provides real-time AI-powered website support through WebSocket communication! 🛠️✨💬
