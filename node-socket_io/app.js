const { Server } = require("socket.io");

const express = require('express');

const app = express();

let io = null;

app.use('/s', (req,res,next) => {
	io.emit("hello", { a: "b", c: [] });
   res.send("socket");
})
app.use('/', (req,res,next) => {
	//io.emit("hello", { a: "b", c: [] });
   res.send("abcd");
})

let server = app.listen(3000);

io = new Server(server, { cors: { origin: "*" }  });

io.on('connection', socket => { 

console.log('client connected');

socket.join("room1");
socket.on("hello", (args) => {console.log(args);io.emit("hello", args)});

});

