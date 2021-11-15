import React, { useState } from 'react';

const initailFormValues = {
    name: '',
    type: false,
    startTime: false,
    duration: false,
    intensityLevel: false,
    location: '',
    attendees: '',
    maxClassSize: ''
};

function CreateClass(props) {

    const [createdClass, setCreatedClass] = useState(initailFormValues);

    const onChange = (evt) => {
        // work in progress
    };
    const onSubmit = (evt) => {
        // Work in progress
        evt.preventDefault();
    };

    return (
        <div>
            <h2>Create Your Class</h2>
            <form id='class-form-container'>
                <label>Instructor Name
                    <input
                        // value={name}
                        onChange={onChange}
                        name='name'
                        type='text' />
                </label>
                <label>Class Type
                    <select
                        onChange={onChange}
                        // value={type}
                        name='type'
                    >
                        <option>Select a Class Type</option>
                    </select>
                </label>
                <label>Start Time
                    <select
                        onChange={onChange}
                        // value={startTime}
                        name='startTime'
                    >
                        <option>Select a Start Time</option>
                    </select>
                </label>
                <label>Duration
                    <select
                        onChange={onChange}
                        // value={startTime}
                        name='duration'
                    >
                        <option>Duration of Class</option>
                    </select>
                </label>
                <label>Intensity Level
                    <select
                        onChange={onChange}
                        // value={intensityLevel}
                        name='intensityLevel'
                    >
                        <option>Select your Intensity Level</option>
                    </select>
                </label>
                <label>Location
                    <input
                        // value={location}
                        onChange={onChange}
                        name='location'
                        type='text' />
                </label>
                <label>Current number of registered attendees
                    <input
                        // value={attendees}
                        onChange={onChange}
                        name='attendees'
                        type='text' />
                </label>
                <label>Max Class Size
                    <input
                        // value={maxClassSize}
                        onChange={onChange}
                        name='maxClassSize'
                        type='text' />
                </label>
            </form>
        </div>
    );
}




export default CreateClass;