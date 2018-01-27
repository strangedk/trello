import React from 'react';
import List from '../board/list';
import StoryBoardData from '../../data/storyBoardData';
import '../../styles/storyBoard.css'

class StoryBoard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lists: StoryBoardData.data()
        };

        this.addList = this.addList.bind(this);
        this.onRemoveListHandler = this.onRemoveListHandler.bind(this);
    }

    render() {
        return <div className="lists">
            {
                this.state.lists.map((item,index,arr) => {
                    return <List key={index} data={item} onListRemove={this.onRemoveListHandler}/>
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
                    id: lists.length,
                    title: "New task"
                }
            ]
        });

        this.setState({
            lists
        });
    }

    onRemoveListHandler(id) {
        const {lists} = this.state;
        let toRemove = -1;

        lists.some((item, index, arr) => {
            if (item.id === id) {
                toRemove = index;
            }
        });

        if (toRemove !== -1) {
            lists.splice(toRemove, 1);

            this.setState({
                lists
            });
        }
    }
}

export default StoryBoard;