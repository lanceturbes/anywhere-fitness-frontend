
import React from 'react';
import {Link} from 'react-router-dom'; 

export default function HomePage(){
    return (
        <div className="homepage-container">
            <h1>Start your journey to a healthier life.</h1>
            <hr/>
            <Link to={`/getstarted`}>
            <button className="start-btn">Get started</button>
            </Link>
        </div>
    )
}
// import CreateClass from "./CreateClass"

// // function HomePage() {
// //   return <>
// //   <CreateClass />
// //   </>
// // }
// export default HomePage

