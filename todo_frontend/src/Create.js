import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

const Create = () => {
    const [task, setTask] = useState('');

    const createTask = () => {
        axios.post('http://localhost:5001/add', { task: task.trim() })
            .then(result => {
                console.log(result.data);
                window.location.reload();
                setTask('');
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h1>trask</h1>
            <div className='create-form'>
                <input
                    type='text'
                    placeholder='Votre trask...'
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    required
                />
                <button onClick={createTask}>+</button>
            </div>
        </div>
    );
};

export default Create;
