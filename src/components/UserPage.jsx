import React from 'react';
import '../styles/userpage.css'



    
    const UserPage = (props) => {
        const { users } = props;
        return (
            <div>
                {users.map((res) => {
                    return (
                        <div className="userCard">
                            <h1>{res.name}</h1>
                            <p>{res.instructor}</p>
                            <ul className="infoList">
                                <li>Location: {res.location}</li>
                                <li>Class Type: {res.type}</li>
                                <li>Intensity: {res.intensity}</li>
                            </ul>
                            <button id="userButton">Join</button>
                        </div>
                    )
                })}
            </div>
        )
    }

    export default UserPage
