// Simple WebSocket Server for Testing
import { WebSocketServer } from 'ws';
import http from 'http';

console.log('🚀 Starting Simple WebSocket Server...');

// Create HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('WebSocket Server is running!\n');
});

// Create WebSocket server
const wss = new WebSocketServer({ 
  server,
  path: '/chat'
});

// Website support responses
const supportResponses = [
  "Thank you for your feedback! I've noted your concern and will pass it along to our development team.",
  "I understand you're having trouble with navigation. Let me help you find what you're looking for.",
  "I've logged this as a bug report. Our technical team will investigate and fix this issue.",
  "That's helpful feedback! I'll make sure our team sees this suggestion for improvement.",
  "I can help you navigate the website. What specific information are you looking for?",
  "Thank you for reporting this issue. I've documented it and our team will work on a fix."
];

// Handle WebSocket connections
wss.on('connection', (ws) => {
  console.log('✅ New client connected to Nirvaha Website Support Chatbot');
  
  // Send welcome message
  ws.send(JSON.stringify({
    type: 'bot_response',
    message: "Hello! I'm your Nirvaha website support assistant. How can I help you today?",
    timestamp: new Date().toISOString()
  }));

  // Handle incoming messages
  ws.on('message', (data) => {
    try {
      const message = JSON.parse(data);
      console.log('📨 Received message:', message.message);
      
      if (message.type === 'user_message') {
        // Generate response
        const response = supportResponses[Math.floor(Math.random() * supportResponses.length)];
        
        // Send response after a short delay
        setTimeout(() => {
          ws.send(JSON.stringify({
            type: 'bot_response',
            message: response,
            timestamp: new Date().toISOString()
          }));
        }, 1000);
      }
    } catch (error) {
      console.error('❌ Error processing message:', error);
    }
  });

  // Handle connection close
  ws.on('close', () => {
    console.log('🔌 Client disconnected');
  });

  // Handle errors
  ws.on('error', (error) => {
    console.error('❌ WebSocket error:', error);
  });
});

// Start server
const PORT = process.env.PORT || 8081;
server.listen(PORT, () => {
  console.log(`🛠️ Nirvaha Website Support Chatbot WebSocket Server running on port ${PORT}`);
  console.log(`📡 WebSocket endpoint: ws://localhost:${PORT}/chat`);
  console.log(`🌐 HTTP endpoint: http://localhost:${PORT}`);
  console.log('✨ Ready to provide website support assistance!');
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down WebSocket server...');
  server.close(() => {
    console.log('✅ Server closed gracefully');
    process.exit(0);
  });
});
