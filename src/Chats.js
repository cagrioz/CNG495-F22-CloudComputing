import './Chats.css';
import Chat from './Chat';

import profilePic from './cagridogu.jpg';
import profilePic2 from './seray.jpeg';

function Chats() {
    return (
        <div className="chats">
            <Chat name="Amy Acker" message="How r u?" timestamp="5 mins ago" profilePic={profilePic} />
            <Chat name="Seray Sayan" message="How r u?" timestamp="10 mins ago" profilePic={profilePic2} />
            <Chat name="Ecem Melek Şanlı" message="How r u?" timestamp="1 week ago" profilePic={profilePic} />
        </div>
    );
}
export default Chats;
