import React from 'react';
import Task from "./task";
import AddTask from "./addTask";
import GUID from "../../data/GUID";

import '../../styles/board/list.css';

export default class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: props.data.tasks,
            title: props.data.title,
            id: props.data.id
        };

        console.log("constructor: " + this.title);

        this.onAddTaskHandler = this.onAddTaskHandler.bind(this);
        this.onRemoveTaskHandler = this.onRemoveTaskHandler.bind(this);

        this.updateData = this.updateData.bind(this);
    }

    updateData(tasks, title, id) {
        this.setState({
            tasks,
            title,
            id
        });
    }

    componentWillReceiveProps(newProps) {
        this.updateData(
            newProps.data.tasks,
            newProps.data.title,
            newProps.data.id
        );
    }

    render() {
        const {tasks} = this.state;
        const {title} = this.state;
        const {id} = this.state;

        const tasksDom = tasks && tasks.map((item, index) => {
            return <Task key={index} task={item} onRemoveTask={this.onRemoveTaskHandler} alt="Remove list"/>
        });

        const buttonRemove = <span className='list-remove' onClick={() => {
            this.props.onListRemove(id)
        }}>✖</span>;

        return (
            <div className='list'>
                <span>
                    {title}
                    {buttonRemove}
                </span>
                {tasksDom}
                <AddTask onAddTask={this.onAddTaskHandler}/>
            </div>
        );
    }

    onAddTaskHandler(task) {
        const {tasks} = this.state;

        tasks.push({
            id: GUID.create(),
            title: task.title
        });

        this.setState({
            tasks
        })
    }

    onRemoveTaskHandler(id) {
        const {tasks} = this.state;
        let toRemove = -1;

        tasks.some((item, index) => {
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