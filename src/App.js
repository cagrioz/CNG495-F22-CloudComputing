import { Box, Button, Slider } from '@mui/material';
import { useState } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { useEffect, useState } from 'react';
import database from './firebase';
import './App.css';
import Chats from './Chats';
import ChatScreen from './ChatScreen';
import Header from './Header';
import SwipeButton from './SwipeButton';
import TinderCards from './TinderCards';

function App() {
    function valuetext(value: number) {
        return `${value}°C`;
    }

    const [value, setValue] = useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    const [people, setPeople] = useState([]);
    
    useEffect(() => {
        database.collection('people').onSnapshot((snapshot) => setPeople(snapshot.docs.map((doc) => doc.data())));
    }, []);

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
                        <Chats />
                    </Route>
                    <Route path="/profile">
                        <h1>PROFILE PAGE</h1>
                    </Route>
                    <Route path="/">
                        <Header />
                        <Box sx={{ width: 200, mx: 'auto', my: '20px' }}>
                            <Slider
                                getAriaLabel={() => 'Age range'}
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="on"
                                getAriaValueText={valuetext}
                                min={18}
                                max={99}
                            />

                            {/* Apply button */}
                            <Button variant="contained" color="primary">
                                Apply
                            </Button>
                        </Box>
                        <TinderCards people={people} />
                        <SwipeButton handleClick={handleClick} />
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
