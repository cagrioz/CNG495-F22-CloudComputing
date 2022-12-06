import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Chats from './Chats';
import Header from './Header';
import TinderCards from './TinderCards';

function App() {
    return (
        <div className="App">
            <Header />

            <Router>
                <Switch>
                    <Route path="/chat">
                        <Chats />
                    </Route>
                    <Route path="/profile">
                        <h1>PROFILE PAGE</h1>
                    </Route>
                    <Route path="/">
                        <TinderCards />
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
