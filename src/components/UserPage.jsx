import React from 'react';
 
    const UserPage = (props) => {
        const { users } = props;
        return (
            <div>
                {users.map((res) => {
                    return (
                        <div className="userCard" key ={res.id}>
                            <h1>{res.name}</h1>
                            <p>{res.instructor}</p>
                            <button className="btn">Join</button>
                        </div>
                    )
                })}
            </div>
        )
    }

    export default UserPage
