import React, { useState } from 'react';
import profilePic from './seray.jpeg';
import './ChatScreen.css';
import { Avatar } from '@mui/material';

function ChatScreen() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        { name: 'Seray', image: profilePic, message: 'How r u?' },
        { name: 'Seray', image: profilePic, message: 'How r u?' },
        { message: 'Hows it going!' },
    ]);
    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput('');
    };
    return (
        <div className="chatScreen">
            <p className="chatScreen_title">YOU MATCHED WITH SERAY ON 10/08/20</p>
            {messages.map((message) =>
                message.name ? (
                    <div className="chatScreen_message">
                        <Avatar className="chatScreen_avatar" alt={message.name} src={message.image}></Avatar>
                        <p className="chatScreen_text">{message.message}</p>
                    </div>
                ) : (
                    <div className="chatScreen_message">
                        <p className="chatScreen_textUser">{message.message}</p>
                    </div>
                )
            )}
            <div>
                <form action="" className="chatScreen_input">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="chatScreen_InputField"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button className="chatScreen_inputButton" type="submit" onClick={handleSend}>
                        SEND
                    </button>
                </form>
            </div>
        </div>
    );
}
export default ChatScreen;
