import React from 'react';
import List from '../board/list';
import StoryBoardData from '../../data/storyBoardData';
import '../../styles/storyBoard.css'
import GUID from "../../data/GUID";

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
                this.state.lists.map((item,index) => {
                    return <List key={index} data={item} onListRemove={this.onRemoveListHandler}/>
                })
            }

            <div className="add-list" onClick={this.addList}>+</div>
        </div>
    }

    addList() {
        const {lists} = this.state;

        lists.push({
            id: GUID.create(),
            title: "New List " + Math.floor(Math.random()*99)
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