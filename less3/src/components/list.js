import React from 'react';
import '../styles/list.css';
import Task from "./task";
import AddTask from "./addTask";

export default class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.data.id,
            title: this.props.data.title,
            tasks: this.props.data.tasks
        };

        this.onAddTaskHandler = this.onAddTaskHandler.bind(this);
        this.onRemoveTaskHandler = this.onRemoveTaskHandler.bind(this);
    }

    render() {
        const {tasks} = this.state;

        const tasksDom = tasks.map((item, index) => {
            return <Task key={index} task={item} onRemoveTask={this.onRemoveTaskHandler}/>
        });

        return (
            <div className='list'>
                <div>{this.state.title}</div>
                {tasksDom}
                <AddTask onAddTask={this.onAddTaskHandler}/>
            </div>
        );
    }

    onAddTaskHandler(task) {
        const {tasks} = this.state;

        tasks.push({
            id:tasks.length,
            title:task.title
        });

        this.setState({
            tasks
        })
    }

    onRemoveTaskHandler(id) {
        const {tasks} = this.state;
        let toRemove = -1;

        tasks.some((item, index, arr) => {
            if (item.id === id) {
                toRemove = index;
            }
        });

        if (toRemove !== -1) {
            tasks.splice(toRemove, 1);

            this.setState({
                tasks
            });
        }
    }
}