import React from 'react';

const Pokemon = ({ pokemon }) => {
    return(
        <div>
            <center><h1>{pokemon.name}</h1></center>
        </div>
    )
};

export default Pokemon;