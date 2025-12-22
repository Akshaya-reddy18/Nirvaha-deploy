// WebSocket Server Example for Nirvaha Chatbot
// Run with: node websocket-server-example.js

const WebSocket = require('ws');
const http = require('http');

// Create HTTP server
const server = http.createServer();

// Create WebSocket server
const wss = new WebSocket.Server({ 
  server,
  path: '/chat'
});

// Website support-focused bot responses
const supportResponses = [
  "Thank you for your feedback! I've noted your concern and will pass it along to our development team.",
  "I understand you're having trouble with navigation. Let me help you find what you're looking for. What specific page or feature are you trying to access?",
  "I've logged this as a bug report. Our technical team will investigate and fix this issue. Thank you for reporting it!",
  "That's helpful feedback! I'll make sure our team sees this suggestion for improvement.",
  "I can help you navigate the website. What specific information or feature are you looking for?",
  "Thank you for reporting this issue. I've documented it and our team will work on a fix.",
  "I appreciate you taking the time to share this feedback. It helps us improve the website experience.",
  "I understand your concern. Let me help you find the right section or report this issue to our team.",
  "Thank you for your patience. I've noted this issue and will ensure it gets addressed.",
  "Your feedback is valuable to us. I've recorded your suggestion for our development team to review.",
  "I can help you with website navigation or report any issues you're experiencing. What do you need assistance with?",
  "Thank you for bringing this to our attention. I've logged this issue for our technical team to investigate."
];

// Website support response generation
function generateResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  // Keyword-based responses for website support
  if (message.includes('bug') || message.includes('error') || message.includes('broken') || message.includes('not working')) {
    return "I've logged this as a bug report. Our technical team will investigate and fix this issue. Thank you for reporting it! Can you provide more details about what specifically isn't working?";
  }
  
  if (message.includes('navigation') || message.includes('find') || message.includes('where') || message.includes('how to')) {
    return "I can help you navigate the website. What specific information or feature are you looking for? I can guide you to the right section.";
  }
  
  if (message.includes('feedback') || message.includes('suggestion') || message.includes('improve')) {
    return "That's helpful feedback! I'll make sure our team sees this suggestion for improvement. Thank you for helping us make the website better.";
  }
  
  if (message.includes('slow') || message.includes('loading') || message.includes('performance')) {
    return "I understand you're experiencing performance issues. I've logged this for our technical team to investigate. Thank you for reporting this.";
  }
  
  if (message.includes('login') || message.includes('sign in') || message.includes('account')) {
    return "I can help you with account-related issues. What specific problem are you experiencing with login or your account?";
  }
  
  if (message.includes('contact') || message.includes('help') || message.includes('support')) {
    return "I'm here to help! You can ask me about navigation, report bugs, or share feedback. What do you need assistance with?";
  }
  
  if (message.includes('thank') || message.includes('thanks')) {
    return "You're welcome! I'm here to help with any website questions, bug reports, or feedback you might have.";
  }
  
  // Default responses
  return supportResponses[Math.floor(Math.random() * supportResponses.length)];
}

// Handle WebSocket connections
wss.on('connection', (ws) => {
  console.log('New client connected to Nirvaha Website Support Chatbot');
  
  // Send welcome message
  ws.send(JSON.stringify({
    type: 'bot_response',
    message: "Hello! I'm your Nirvaha website support assistant. How can I help you today? You can ask about navigation, report bugs, or share feedback.",
    timestamp: new Date().toISOString()
  }));

  // Handle incoming messages
  ws.on('message', (data) => {
    try {
      const message = JSON.parse(data);
      
      if (message.type === 'user_message') {
        console.log('Received user message:', message.message);
        
        // Simulate AI processing time
        setTimeout(() => {
          const response = generateResponse(message.message);
          
          ws.send(JSON.stringify({
            type: 'bot_response',
            message: response,
            timestamp: new Date().toISOString()
          }));
        }, 1000 + Math.random() * 2000); // 1-3 second delay
      }
    } catch (error) {
      console.error('Error processing message:', error);
      ws.send(JSON.stringify({
        type: 'error',
        message: 'Sorry, I had trouble understanding that. Could you please try again?',
        timestamp: new Date().toISOString()
      }));
    }
  });

  // Handle connection close
  ws.on('close', () => {
    console.log('Client disconnected from Nirvaha Website Support Chatbot');
  });

  // Handle errors
  ws.on('error', (error) => {
    console.error('WebSocket error:', error);
  });
});

// Start server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
console.log(`🛠️ Nirvaha Website Support Chatbot WebSocket Server running on port ${PORT}`);
console.log(`📡 WebSocket endpoint: ws://localhost:${PORT}/chat`);
console.log('✨ Ready to provide website support assistance!');
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down Nirvaha Website Support Chatbot server...');
  server.close(() => {
    console.log('✅ Server closed gracefully');
    process.exit(0);
  });
});
