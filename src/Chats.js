import './Chats.css';
import Chat from './Chat';

import profilePic from './cagridogu.jpg';
import profilePic2 from './seray.jpeg';
import { useEffect, useState } from 'react';
import database from './firebase';

function Chats({ user }) {
    // Make a request to the database to get all the chats
    const [chats, setChats] = useState(null);

    useEffect(() => {
        // Make request to the database to chat collection that either user1 or user2 is equal to the logged in user
        database
            .collection('chats')
            .where('users', 'array-contains', user.id)
            .onSnapshot((snapshot) => {
                setChats(snapshot.docs.map((doc) => doc.data().messages));
            });

        console.log(chats);
    }, [user.id]);

    return (
        <div className="chats">
            <Chat name="Amy Acker" message="How r u?" timestamp="5 mins ago" profilePic={profilePic} />
            <Chat name="Seray Sayan" message="How r u?" timestamp="10 mins ago" profilePic={profilePic2} />
            <Chat name="Ecem Melek Şanlı" message="How r u?" timestamp="1 week ago" profilePic={profilePic} />
        </div>
    );
}
export default Chats;
