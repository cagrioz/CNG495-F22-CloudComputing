import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards({ people }) {
    return (
        <div style={{ position: 'relative' }}>
            <div className="tindeCards_cardContainer">
                {people.map((person) => (
                    <TinderCard className="swipe" key={person.name} preventSwipe={['up', 'down']}>
                        <div className="card" style={{ backgroundImage: `url(${person.url})` }}>
                            <h3>{person.name}</h3>
                            <h4>{person.age}</h4>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;
