// Simple WebSocket connection test
import WebSocket from 'ws';

console.log('🧪 Testing WebSocket connection...');

const ws = new WebSocket('ws://localhost:8081/chat');

ws.on('open', () => {
  console.log('✅ WebSocket connected successfully!');
  
  // Send a test message
  ws.send(JSON.stringify({
    type: 'user_message',
    message: 'Hello, this is a test message',
    timestamp: new Date().toISOString()
  }));
});

ws.on('message', (data) => {
  try {
    const response = JSON.parse(data);
    console.log('📨 Received response:', response.message);
    console.log('✅ WebSocket communication working!');
    ws.close();
  } catch (error) {
    console.error('❌ Error parsing response:', error);
  }
});

ws.on('error', (error) => {
  console.error('❌ WebSocket error:', error.message);
});

ws.on('close', () => {
  console.log('🔌 WebSocket connection closed');
  process.exit(0);
});

// Timeout after 5 seconds
setTimeout(() => {
  console.log('⏰ Test timeout - WebSocket may not be running');
  process.exit(1);
}, 5000);
