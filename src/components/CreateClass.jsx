import React, { useState } from 'react';

const initailFormValues = {
    instructor_id: '',
    name: '',
    type: false,
    startTime: '',
    duration: false,
    intensityLevel: false,
    location: '',
    attendees: '',
    maxClassSize: ''
};

function CreateClass() {

    const [createdClass, setCreatedClass] = useState(initailFormValues);
    const {instructor_id,name, type, startTime, duration, intensityLevel, location, maxClassSize} = createdClass;

    const onChange = (evt) => {
        // work in progress
        setCreatedClass({ ...createdClass, [evt.target.name]: evt.target.value})
    };
    const onSubmit = (evt) => {
        // Work in progress
        evt.preventDefault();
    };

    return (
        <div>
            <h2>Create Your Class</h2>
            <form id='class-form-container' onSubmit={onSubmit}>
                <label>Instructor ID
                    <input
                        value={instructor_id}
                        onChange={onChange}
                        name='instructor_id'
                        type='text'
                    />
                </label>
                <label>Class Name
                    <input
                        value={name}
                        onChange={onChange}
                        name='name'
                        type='text' />
                </label>
                <br/>
                <label>Fitness Category
                    <select
                        onChange={onChange}
                        value={type}
                        name='type'
                    >
                        <option>Select your Category</option>
                        <option>Endurance</option>
                        <option>Flexibility</option>
                        <option>Balance</option>
                        <option>Strength</option>
                        <option>Meditation</option>
                    </select>
                </label>
                <br/>
                <label>Start Time
                 <input
                    value={startTime}
                    onChange={onChange}
                    name='startTime'
                    type='text'
                 />
                </label>
                <br/>
                <label>Duration
                    <select
                        onChange={onChange}
                        value={duration}
                        name='duration'
                    >
                        <option>Duration of Class</option>
                        <option>30 Minutes</option>
                        <option>45 Minutes</option>
                        <option>60 Minutes</option>
                        <option>90 Minutes</option>
                        <option>120 Minutes</option>
                    </select>
                </label>
                <br/>
                <label>Intensity Level
                    <select
                        onChange={onChange}
                        value={intensityLevel}
                        name='intensityLevel'
                    >
                        <option>Select your Intensity Level</option>
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </select>
                </label>
                <br/>
                <label>Location
                    <input
                        value={location}
                        onChange={onChange}
                        name='location'
                        type='text' />
                </label>
                <br/>
                <label>Max Class Size
                    <input
                        value={maxClassSize}
                        onChange={onChange}
                        name='maxClassSize'
                        type='text' 
                        />
                </label>
                <br/>
                <button id='submitBtn' type='submit'>Add Your Class</button>
            </form>
        </div>
    );
}




export default CreateClass;