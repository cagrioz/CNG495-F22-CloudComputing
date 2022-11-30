import './Chats.css';
import Chat from './Chat';

import profilePic from './cagridogu.jpg';

function Chats() {
    return (
        <section className="chats">
            <Chat name="Amy Acker" message="How r u?" timestamp="5 mins ago" profilePic={profilePic} />
            <Chat name="Amy Acker" message="How r u?" timestamp="5 mins ago" profilePic={profilePic} />
            <Chat name="Amy Acker" message="How r u?" timestamp="5 mins ago" profilePic={profilePic} />
        </section>
    );
}
export default Chats;
