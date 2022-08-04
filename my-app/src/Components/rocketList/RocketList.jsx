import React from 'react';
import Rocket from '../rocket/Rocket';

const RokectsList = () => {

    const keys = [
        { id: 1},
        { id: 2},
        { id: 3},
        { id: 4},
        { id: 5},
    ]
    const rockets = keys.map((rocket) => ( 
        <li key={rocket.id}>
            <Rocket />
        </li>
    ))

    return (
        <ul>
            {rockets}
        </ul>
    );
}

export default RokectsList;