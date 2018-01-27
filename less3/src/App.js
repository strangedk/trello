import React, {Component} from 'react';
import StoryBoard from "./components/board/storyBoard";
import Header from './components/common/header';
import Home from './components/home';

import {Route, Switch} from 'react-router-dom';

import './styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/board" component={StoryBoard}/>
                </Switch>
            </div>
        );
    }
}

export default App;