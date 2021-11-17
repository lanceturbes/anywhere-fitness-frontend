import React, { useEffect, useState } from 'react';
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
                            <button id="userButton">Join</button>
                        </div>
                    )
                })}
            </div>
        )
    }

    export default UserPage
