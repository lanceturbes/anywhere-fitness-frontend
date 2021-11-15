import React, { useState } from 'react';

const initailFormValues = {
    name: '',
    type: '',
    startTime: '',
    duration: '',
    intensityLevel: '',
    location: '',
    attendees: '',
    maxClassSize: ''
};

const CreateClass = (props) => {

    const [class, setClass] = useState(initailFormValues);
}




export default CreateClass;