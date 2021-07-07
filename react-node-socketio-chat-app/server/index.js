const express = require('express');
const socketio = require('socket.io');
const { addUser, removeUser, getUser } = require('./user.js');

const app = express();


const server = app.listen(5000);
const io = socketio(server, { cors: { origin: "http://localhost:3000" }});

io.on('connection', socket => {
    console.log("client connected");

    socket.on('join', ({username,room}) => {
        let result = addUser({ id:socket.id, username, room });
        
        if(result !== 1){
            io.to(room).emit("userInOtherRoom", { ...result })
        }
        else {
            socket.join(room);
            io.to(room).emit("message", { username:'admin', message:`${username} joined the room`})
        }
    });

    socket.on('message', (message) => {
        let user = getUser(socket.id);
        io.to(user.room).emit("message", { username:user.username, message})
    });

    socket.on('leave', () => {
        let user = getUser(socket.id);
        let message = `${user.username} left the room`;
        io.to(user.room).emit("message", { username:'admin', message})
    });


    socket.on('disconnect', () => {
        console.log("client disconnected");
        removeUser(socket.id);
    });
});