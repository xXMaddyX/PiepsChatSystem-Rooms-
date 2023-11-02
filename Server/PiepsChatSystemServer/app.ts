import express from 'express';
import * as path from 'path';
const socketIo = require('socket.io');
import http from 'http';
import bodyParser from 'body-parser';
import rateLimit from 'express-rate-limit';


const createChatServer = (port: any, hostname: any, chatRoomName: any) => {
    const app = express();
    const server = http.createServer(app);
    const io = socketIo(server, {
        cors: {
            origin: 'http://localhost:5173',
            methods: ['GET', 'POST'],
            credentials: true, 
        }
    });
    const namespace = io.of(`/${chatRoomName}`);
    
    const limiter = rateLimit({
        windowMs: 1 * 60 * 1000,
        max: 100
    });

    const messageList: any = [];
    const userList: any = [];
    const gretting = [{clientUserName: 'Server', message: `Willkommen im Chatraum ${chatRoomName}`}];

    app.use(express.static(path.join(__dirname, 'views')));
    app.use(bodyParser.json());
    app.use(limiter);

    namespace.on('connection', (socket: any) => {
        console.log(`Ein Benutzer hat sich im Raum ${chatRoomName} verbunden.`);
    });

    // Socket.io Communication
    io.on('connection', (socket: any) => {
    console.log(`Ein Benutzer hat sich verbunden ${chatRoomName}.`);
    socket.on('send-username', (username: any) => {
        console.log(`Ein Nutzer hat sich zu ${username} umbenannt`);

        let user = {
            id: socket.id,
            username: username
        };
        userList.push(user);
        io.emit('update-user', userList);
        console.log(userList)
        
    });

    // Listen to send events
    socket.on('send-message', (message: any) => {
        console.log("Nachricht vom Client empfangen:", message);
        messageList.push(message);

        //Send MSG to all clients
        io.emit('new-message', messageList[messageList.length - 1]);
    });
    //Send Chat Log to new connecting clients
    socket.on('get-log', () => {
        socket.emit('chat-log', messageList);
        socket.emit('chat-log', gretting);
    });

    socket.on('get-userlist', () => {
        socket.emit('userlist', userList)
    })

    //MSG on disconnect
    socket.on('disconnect', () => {
        console.log('Ein Benutzer hat sich getrennt.');

        for (let i = 0; i < userList.length; i++) {
            if (userList[i].id == socket.id) {
                userList.splice(i, 1)
                console.log(userList)
                break;
            }
        }
        io.emit('user-disconnect', userList);
    });
});
//------------------------------------------------------------------------

    server.listen(port, '127.0.0.1', () => {
        console.log(`Chatraum ${chatRoomName} läuft auf http://${hostname}:${port}`)
    });
};

const hostname = "127.0.0.1"
createChatServer(5000, hostname, 'chatroomMain');
createChatServer(5001, hostname, 'chatroom1');
createChatServer(5002, hostname, 'chatroom2');
createChatServer(5003, hostname, 'chatroom3');