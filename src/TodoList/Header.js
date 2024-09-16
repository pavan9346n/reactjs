import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [task, setTask] = useState(''); // To store the current input value
    const [tasks, setTasks] = useState([]); // To store the list of tasks
    const [editIndex, setEditIndex] = useState(null); // To track the index of the task being edited
    const [editValue, setEditValue] = useState(''); // To store the value of the task being edited
    const [selectedTaskIndex, setSelectedTaskIndex] = useState(null); // To store the selected task index

    // Event handler for input change
    const handleInputChange = (event) => {
        setTask(event.target.value);
    };

    // Event handler for adding a task
    const handleAddTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask(''); // Clear the input field
        }
    };

    // Event handler for removing a task
    const handleRemoveTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
        // If the removed task was selected, clear selection
        if (index === selectedTaskIndex) {
            setSelectedTaskIndex(null);
        }
    };

    // Event handler for initiating edit mode
    const handleEditTask = (index) => {
        setEditIndex(index);
        setEditValue(tasks[index]);
    };

    // Event handler for changing the task while editing
    const handleEditChange = (event) => {
        setEditValue(event.target.value);
    };

    // Event handler for saving the edited task
    const handleSaveEdit = () => {
        if (editValue.trim()) {
            setTasks(tasks.map((task, index) =>
                index === editIndex ? editValue : task
            ));
            setEditIndex(null); // Exit edit mode
            setEditValue(''); // Clear the edit value
        }
    };

    // Event handler for selecting a task
    const handleSelectTask = (index) => {
        setSelectedTaskIndex(index);
    };

    return (
        <div className='header-container'>
            <div className='main'>
                <div className='text'>
                    <p className='first'>Task Done</p>
                    <p className='second'>Keep it up</p>
                </div>
                <div className='btn_content'>
                    <button>{tasks.length}/3</button>
                </div>
            </div>

            <div className='search'>
                <input
                    type='text'
                    placeholder='Write your next task'
                    value={task}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddTask}>+</button>
            </div>

            <div className='task-list'>
                {tasks.length === 0 ? (
                    <p>No tasks added</p>
                ) : (
                    tasks.map((task, index) => (
                        <div key={index} className='task-item'>
                            <input
                                type='radio'
                                id={`task-${index}`}
                                name='task'
                                checked={selectedTaskIndex === index}
                                onChange={() => handleSelectTask(index)}
                            />
                            <label htmlFor={`task-${index}`}>
                                {editIndex === index ? (
                                    <>
                                        <input
                                            type='text'
                                            value={editValue}
                                            onChange={handleEditChange}
                                        />
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className='icons'
                                            onClick={handleSaveEdit}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <span>{task}</span>
                                        <FontAwesomeIcon
                                            icon={faPenToSquare}
                                            className='icons'
                                            onClick={() => handleEditTask(index)}
                                        />
                                        <FontAwesomeIcon
                                            icon={faTrash}
                                            className='icons'
                                            onClick={() => handleRemoveTask(index)}
                                        />
                                    </>
                                )}
                            </label>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Header;
