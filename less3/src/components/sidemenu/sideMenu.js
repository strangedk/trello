import React from 'react';

import FontAwesome from 'react-fontawesome';
import '../../styles/sidemenu/sidemenu.css';

import ChangeBackground from "./changeBackground";
import Stickers from "./stickers";

class SideMenu extends React.Component {
    constructor() {
        super();

        this.state = {
            isOpen: 'none',
            currentIndex: 0
        };

        this.toggleOpen = this.toggleOpen.bind(this);
    }

    render() {
        const {isOpen} = this.state;
        const {currentIndex} = this.state;

        const components = [
            <ChangeBackground/>,
            <Stickers/>
        ];

        const buttonMenu = <div className="button-menu" onClick={this.toggleOpen}>... Menu</div>;
        const closeButton = <FontAwesome className='super-crazy-colors' style={{position:"absolute", right: 5, cursor: "pointer"}} name='times' onClick={this.toggleOpen}/>;

        return (
            <div>
                {buttonMenu}

                <div style={{display: isOpen}} className="side-menu">
                    {closeButton}

                    <div>
                        <button className="button-menu" onClick={() => this.changeIndex(0)}>Change Background</button>
                        <button className="button-menu" onClick={() => this.changeIndex(1)}>Stickers</button>
                    </div>

                    {components[currentIndex]}
                </div>
            </div>
        );
    }

    changeIndex(currentIndex) {
        this.setState({
            currentIndex: currentIndex
        })
    }

    toggleOpen() {
        const {isOpen} = this.state;

        this.setState({
            isOpen: isOpen === 'none' ? 'block' : 'none'
        });
    }
}

export default SideMenu;