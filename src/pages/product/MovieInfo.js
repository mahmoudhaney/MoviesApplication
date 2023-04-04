import React from 'react';
import { useParams } from 'react-router-dom';

const MovieInfo = () => {
    // HOOKS - Helper to get the parameter from the route
    let {id} = useParams();
    return (
        <div>
            <h1>Movie {id}</h1> 
        </div>
    );
};

export default MovieInfo;