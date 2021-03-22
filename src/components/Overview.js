import React from 'react';

const Overview = props => {
    const { input, tasks, editMode, handleChange, handleDelete, handleUpdate, updateTask } = props

    return (
        <ul>
            {tasks.map((task, index) => (
                <li className='task' key={index}>
                    { editMode === false ? (
                            <div>{index+1}. {task}
                            <button id='update-btn' onClick={() => handleUpdate(task)}>Update</button>
                            <button id='delete-btn' onClick={() => handleDelete(task)}>Delete</button></div>
                        ) : (
                            <form onSubmit={(e) => updateTask(e, task, index)}>
                            <input type="text" placeholder={task} onChange={handleChange} value={input}/>
                            <button type='submit'>Update task</button>
                        </form>)
                    }
                </li>
            ))}
        </ul>
    )
};

export default Overview;