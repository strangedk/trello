import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <h1>Trello title</h1>

            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/board'>Trello</Link></li>
            </ul>
        </div>
    }
}

export default Header;