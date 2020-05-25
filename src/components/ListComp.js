import React from 'react';

const ListComp = ({data,id}) => {
    return (
        <div>
            <h2 >I am {data.name}, a {data.role} specialised in {data.skill}</h2>
        </div>
    );
}

export default ListComp;
