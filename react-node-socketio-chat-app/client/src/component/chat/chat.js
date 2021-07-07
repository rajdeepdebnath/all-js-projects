import { useEffect, useState } from 'react'
import queryString from 'query-string'
import { Link, useHistory } from 'react-router-dom'
import classes from './chat.module.css'
import { io } from 'socket.io-client'

let socket;

const Chat = () => {
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    let history = useHistory();

    useEffect(() => {

        const {username, room} = queryString.parse(window.location.search);
        setRoom(room);

        socket = io("localhost:5000");

        socket.emit('join', {room,username});

        socket.on('message', ({message,username}) => {
            setMessages(prevMessages => [...prevMessages, {username,message}])
        });

        socket.on("userInOtherRoom", ({username,room}) => {
            history.push(`/chat?username=${username}&room=${room}`);
        });

        return () => {
            socket.emit('leave');
            socket.removeAllListeners();
        }
    }, []);

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        socket.emit("message", message);
        setMessage('');
    }

    return (
        <div className={classes.body}>
            <div className={classes.logOff}><Link to="/">Log off</Link></div>
            <div className={classes.roomContainer}>
                <div className={classes.room}>
                    <div className={classes.roomHeader}>{room}</div>
                    <div className={classes.roomBody}>
                        <div className={classes.messages}>
                            {messages.map(({username,message},i) => 
                            <div key={i} className={classes.message}>
                                <span>{username}:</span> 
                            {message}</div>)}
                        </div>
                        <form className={classes.input} onSubmit={handleMessageSubmit}>
                            <input type="text" value={message} onChange={e => setMessage(e.target.value)} />
                            <button className={classes.send} type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;