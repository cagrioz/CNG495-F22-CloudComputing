import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards({ people, setPeople }) {
    const onSwipe = (direction) => {
        if (direction === 'left' || direction === 'right') {
            // Remove the last person from people array
            setPeople(people.slice(0, -1));
        }
    };

    return (
        <div style={{ position: 'relative' }}>
            <div className="tindeCards_cardContainer">
                {people.map((person) => (
                    <TinderCard className="swipe" key={person.name} onSwipe={onSwipe} preventSwipe={['up', 'down']}>
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
