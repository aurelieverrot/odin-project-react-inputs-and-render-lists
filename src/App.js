import React from 'react';
import './App.css';
import Overview from './components/Overview';

class App extends React.Component {
    state = {
        input: '',
        tasks: [],
        editMode: false
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }

    onSubmitTask = e => {
        e.preventDefault()
        this.setState({
            tasks: this.state.tasks.concat(this.state.input),
            input: ''
        })
    }

    handleDelete = (task) => {
        const newTasksList = this.state.tasks.filter(thisTask => {
            return thisTask!== task
        });

        this.setState({
            tasks: [...newTasksList]
        })
    }

    updateTask = (e, task, index) => {
        e.preventDefault()
        const newTasks = [...this.state.tasks]
        newTasks[index] = this.state.input
        this.setState({
            tasks: newTasks,
            editMode: !this.state.editMode,
            input: ''
        });
    }

    handleUpdate = () => {
        this.setState({editMode: !this.state.editMode})
    }

    render() {
        const { input, tasks, editMode } = this.state

        return(
            <div>
                <form onSubmit={this.onSubmitTask}>
                    <label htmlFor='taskInput'>Enter new task</label>
                    <input type='text' id='taskInput' onChange={this.handleChange} value={input}/>
                    <button type='submit'>Add task</button>
                </form>

                <div>
                    <Overview
                        input={input}
                        tasks={tasks}
                        editMode={editMode}
                        handleChange={this.handleChange}
                        handleDelete={this.handleDelete}
                        handleUpdate={this.handleUpdate}
                        updateTask={this.updateTask}/>
                </div>
            </div>
        )
    }
}

export default App;
