import React from 'react';
import '../styles/task.css';

class Task extends React.Component {
    constructor(props) {
        super(props);

        this.removeTask = this.removeTask.bind(this);
    }

    render() {
        const {task} = this.props;

        return <div>
            <div className='task'>{task && task.title}
                <span className='task-remove' onClick={this.removeTask}>✖</span>
            </div>
        </div>;
    }

    removeTask() {
        const {task} = this.props;

        this.props.onRemoveTask(task.id);
    }
}

export default Task;