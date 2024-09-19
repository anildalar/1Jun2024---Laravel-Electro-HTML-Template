// socket-server.js
import { createServer } from 'http';
import { Server } from 'socket.io';
//import Redis from 'ioredis';

// Create a new Redis instance and subscribe to the chat channel
//const redis = new Redis();
const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

// Listen for Redis events
/* redis.subscribe('chat_channel', (err, count) => {
    console.log('Subscribed to chat-channel');
}); */

/* redis.on('message', (channel, message) => {
    message = JSON.parse(message);
    io.emit(channel + ':' + message.event, message.data);
});
 */
// Listen for new connections
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('User disconnected...');
    });
});

// Start the server on port 3000
httpServer.listen(3000, () => {
    console.log('Socket server is running on port 3000');
});
