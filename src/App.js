import { Box, Slider } from '@mui/material';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';
import database from './firebase';
import './App.css';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import Header from './Header';
import Map from './Map';
import SwipeButton from './SwipeButton';
import TinderCards from './TinderCards';

function App() {
    const loggedInUser = {
        name: 'Cagri Ozarpaci',
        id: '1GgAaNqNUPE8vEbf22lF',
    };

    function valuetext(value) {
        return `${value}°C`;
    }

    const [selectedRange, setSelectedRange] = useState([20, 34]);

    const handleChange = (event, newValue) => {
        setSelectedRange(newValue);
    };

    const [people, setPeople] = useState([]);

    useEffect(() => {
        // Make a request to the database with selected age range
        const unsubscribe = database
            .collection('people')
            .where('age', '>=', selectedRange[0])
            .where('age', '<=', selectedRange[1])
            .onSnapshot((snapshot) => setPeople(snapshot.docs.map((doc) => doc.data())));

        return () => {
            unsubscribe();
        };
    }, [selectedRange]);

    const handleClick = () => {
        database.collection('people').doc('MBKvdFuu3RnFM8qujdzo').update({ liked: true });
    };

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
                        <Chats user={loggedInUser} />
                    </Route>
                    <Route path="/profile">
                        <h1>PROFILE PAGE</h1>
                    </Route>
                    <Route path="/map">
                        <Map></Map>
                    </Route>
                    <Route path="/">
                        <Header />
                        <Box sx={{ width: 200, mx: 'auto', my: '20px' }}>
                            <Slider
                                getAriaLabel={() => 'Age range'}
                                value={selectedRange}
                                onChange={handleChange}
                                valueLabelDisplay="on"
                                getAriaValueText={valuetext}
                                min={18}
                                max={99}
                            />
                        </Box>
                        <h1>Available People: {people.length}</h1>
                        <TinderCards people={people} />
                        <SwipeButton handleClick={handleClick} people={people} setPeople={setPeople} />
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
