import './Chats.css';
import Chat from './Chat';
import { useEffect, useState } from 'react';
import database from './firebase';

function Chats({ user }) {
    const [chats, setChats] = useState([]);
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const unsubscribe = database
            .collection('chats')
            .where('users', 'array-contains', database.doc(`people/${user.id}`))
            .onSnapshot((snapshot) => {
                setChats(snapshot.docs.map((doc) => doc.data()));
            });
        return () => {
            unsubscribe();
        };
    }, [user.id]);

    useEffect(() => {
        if (chats.length > 0) {
            const peoplePromises = chats.flatMap((chat) => {
                return chat.users.filter((userRef) => userRef.id !== user.id).map((userRef) => userRef.get());
            });

            Promise.all(peoplePromises)
                .then((docs) => {
                    const data = docs.map((doc) => doc.data());
                    setPeople(data);
                })
                .catch((error) => {
                    console.log('Error getting people:', error);
                });
        }
        // eslint-disable
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chats]);

    console.log('chats', chats);
    console.log('people', people);

    return (
        <div className="chats">
            {chats.length > 0 &&
                people.length > 0 &&
                chats.map((chat, index) => {
                    const person = people[index];

                    const lastMessage =
                        chat.messages.length === 0 ? 'No messages yet' : chat.messages[chat.messages.length - 1].text;

                    return (
                        <Chat
                            key={index}
                            name={person.name}
                            message={lastMessage}
                            timestamp={person.timestamp}
                            profilePic={person.url}
                        />
                    );
                })}
        </div>
    );
}
export default Chats;
