import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import Header from './Header';
import SwipeButton from './SwipeButton';
import TinderCards from './TinderCards';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/chat/:person">
                        <Header backButton="/chat" />
                        <ChatScreen />
                    </Route>
                    <Route path="/chat">
                        <Header backButton="/" />
                        <Chats />
                    </Route>
                    <Route path="/profile">
                        <h1>PROFILE PAGE</h1>
                    </Route>
                    <Route path="/">
                        <Header />
                        <TinderCards />
                        <SwipeButton />
                    </Route>
                </Switch>
            </Router>
            {/*Buttons below tinder card */}
            {/*Chat Screens */}
            {/*Individual Chat Screen */}
        </div>
    );
}

export default App;
