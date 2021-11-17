
import React from 'react';
import {Link} from 'react-router-dom'; 

export default function HomePage(){
    return (
        <div className="homepage-container">
            <h1>Start your journey to a healthier life.</h1>
            <hr/>
            <Link to={`/getstarted`}>
            <button className="btn">Get started</button>
            </Link>
        </div>
    )
}

