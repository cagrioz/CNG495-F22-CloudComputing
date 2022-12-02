import { useState } from 'react';
import TinderCard from 'react-tinder-card';
import F1 from './cagridogu.jpg';
import F2 from './seray.jpeg';
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Seray Sayan',
            url: F2,
        },
        {
            name: 'Doğu Çağrı Özarpacı',
            url: F1,
        },
    ]);

    return (
        <div>
            <h1>Tinder Card</h1>
            <div className="tindeCards_cardContainer">
                {people.map((person) => (
                    <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']}>
                        <div className="card" style={{ backgroundImage: `url(${person.url})` }}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;
