import React from 'react';
import {Link} from 'react-router-dom';
import SideMenu from "../sidemenu/sideMenu";
import '../../styles/header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <div>
                    <h3>Trello</h3>
                    <Link to='/'>Home</Link>
                    <Link to='/board'>Trello</Link>
                </div>

                <div className="sub-menu">
                    <SideMenu/>
                </div>
            </div>
        );
    }
}

export default Header;