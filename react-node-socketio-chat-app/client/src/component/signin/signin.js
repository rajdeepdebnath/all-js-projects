import { useState } from 'react'

import { Link } from 'react-router-dom'
import classes from './signin.module.css'

const SignIn = () => {
    const [username, setUsername] = useState('')
    const [room, setRoom] = useState('')

    return (
        <div className={classes.body}>
            <div className={classes.signinBox}>
                <div className={classes.header}>Join</div>
                <input className={classes.username} type="text" 
                onChange={e => setUsername(e.target.value)} placeholder="Username"/>
                <input className={classes.room} type="text"
                onChange={e => setRoom(e.target.value)} placeholder="Room"/>
                {(username && room) && <Link 
                to={`/chat?username=${username}&room=${room}`}>Sign in</Link>}
                {(!username || !room) && <Link 
                to="/">Sign in</Link>}
            </div>
        </div>
    );
}

export default SignIn