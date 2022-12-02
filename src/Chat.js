import './Chat.css';
import { Avatar } from '@mui/material';

function Chat({ name, message, timestamp, profilePic }) {
    return (
        <div className="chat">
            <Avatar className="chat__image" src={profilePic} />
            <div className="chat__details">
                <h2>{name}</h2>
                <p>message</p>
            </div>
            <time className="chat__timestamp">{timestamp}</time>
        </div>
    );
}
export default Chat;
