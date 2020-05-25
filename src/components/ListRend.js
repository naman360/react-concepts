import React from 'react';
import ListComp from './ListComp';

const ListRend = () => {
    let person = [
        {
            id:1,
            name:'Naman',
            role:'Developer',
            skill:'React'
        },
        {
            id:2,
            name:'Alex',
            role:'Developer',
            skill:'Angular'
        },
        {
            id:3,
            name:'Aaron',
            role:'Developer',
            skill:'Vue'
        }
    ]

    return (
        <div>
            {person.map(element => <ListComp key={element.id} data={element}/> )}
        </div>
    );
}

export default ListRend;
