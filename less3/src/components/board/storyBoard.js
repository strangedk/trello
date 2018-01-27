import React from 'react';
import List from './list';
import '../../styles/storyBoard.css'

class StoryBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lists: [
                {
                    title: "My tasks",
                    tasks: [
                        {id: 0, title: 'Develop Game'},
                        {id: 1, title: 'Fix Bugs'},
                        {id: 2, title: 'Make Cofee'},
                        {id: 3, title: 'Go to lunch'},
                        {id: 4, title: 'Develop freelance'},
                    ]
                },
                {
                    title: "My homework",
                    tasks: [
                        {id: 0, title: 'Fix state bugs in trello'},
                        {id: 1, title: 'Make lists'},
                        {id: 2, title: 'Add-list function'},
                        {id: 3, title: 'Adding list titles, and make approach to adding new title and new lists. And remove cross.'},
                    ]
                }
            ]
        };

        this.addList = this.addList.bind(this);
    }

    render() {
        return <div className="lists">
            {
                this.state.lists.map((item,index,arr) => {
                    return <List key={index} data={item}/>
                })
            }

            <div className="add-list" onClick={this.addList}>+</div>
        </div>
    }

    addList() {
        const {lists} = this.state;

        lists.push({
            title: "New List",
            tasks: [
                {
                    id: 0,
                    title: "New task"
                }
            ]
        });

        this.setState({
            lists
        })
    }
}

export default StoryBoard;