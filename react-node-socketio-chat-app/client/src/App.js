import { BrowserRouter, Route } from 'react-router-dom'
import Chat from './component/chat/chat'
import SignIn from './component/signin/signin'


const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact>
                <SignIn />
            </Route>
            <Route path="/chat">
                <Chat />
            </Route>
        </BrowserRouter>
    )
}

export default App;