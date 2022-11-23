import './App.css';
import Chats from './Chats';
import Header from './Header';

function App() {
    return (
        <div className="App">
            <h1>Tinder Clone</h1>
            {/*Header*/}
            <Header />
            {/*Tinder Card */}
            {/*Buttons below tinder card */}

            {/*Chat Screens */}
            <Chats />
            {/*Individual Chat Screen */}
        </div>
    );
}

export default App;
