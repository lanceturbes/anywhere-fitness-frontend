import React, { useState } from 'react';

const initailFormValues = {
    name: '',
    type: false,
    startTime: false,
    duration: false,
    intensityLevel: false,
    location: false,
    attendees: '',
    maxClassSize: ''
};

const CreateClass = (props) => {
    const {
        values,
        submit,
        change,
    } = props

const [class, setClass] = useState(initailFormValues);



const onChange = (evt) => {
const {
    name,
    type,
    startTime,
    duration,
    intensityLevel,
    location,
    attendees,
    maxClassSize} = evt.target;
}
const onSubmit = (evt) => {
// Work in progress
    evt.preventDefault()
    submit()
}

return(
    <div>
        <h2>Create Your Class</h2>
        <form id='class-form' > 

        </form>
    </div>
)
}




export default CreateClass;