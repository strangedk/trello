import React from 'react';

export default class AddTask extends React.Component {
    constructor() {
        super();

        this.state = {
            title: "",
            isOpen: false
        };

        this.toggleAddSection = this.toggleAddSection.bind(this);
        this.changeTextArea = this.changeTextArea.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    render() {
        const addCartInput =
            <div className="add-cart-opened">
                <textarea placeholder="task title..." onChange={this.changeTextArea} value={this.state.title}/>
                <button onClick={this.addTask}>Add</button>
                <button onClick={this.toggleAddSection}>X</button>
            </div>;

        const addCartButon =
            <div className="add-cart" onClick={this.toggleAddSection}>Add cart + </div>

        return (this.state.isOpen)? addCartInput : addCartButon
    }

    toggleAddSection() {
        this.setState({
            isOpen: !this.state.isOpen,
            title: ""
        })
    }

    changeTextArea(e) {
        this.setState({
            title: e.target.value
        })
    }

    addTask() {
        this.props.onAddTask({
            title: this.state.title
        });

        this.setState({
            title: "",
            isOpen: false
        })
    }
}