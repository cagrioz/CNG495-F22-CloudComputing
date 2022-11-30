import { useState } from 'react';
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
        </div>
    );
}

export default TinderCards;
