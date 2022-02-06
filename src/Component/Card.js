import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import '../Component/Card.css';
import axios from '../axios';

function Card() {
    const [peopleD, setpeople] = useState([]);

    useEffect(() => {
        async function featchData() {
            const req = await axios.get("/tinder/card")

            setpeople(req.data)
        }

        featchData();
    }, [])
    const swiped = (nametoDelete) => {
        console.log('removing the ' + nametoDelete);
    }

    const outofFrame = (fullName) => {
        console.log(`${fullName} left the screen `);

    }
    return (
        <div className='tiderCards'>
            {peopleD.map((person) => (
                <TinderCard
                    className='swipe'
                    key={person._id}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir) => swiped(dir, person.fullName)}
                    onCardLeftScreen={() => outofFrame(person.fullName)}
                >
                    <div className='card'
                        style={{ backgroundImage: `url( ${person.url}) ` }}>
                        <h3> {person.fullName} </h3>
                    </div>
                </TinderCard>
            )
            )}
        </div>
    );

};
export default Card;

