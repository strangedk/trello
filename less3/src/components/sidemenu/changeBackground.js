import React from 'react';
import ColorsData from '../../data/colorsData';
import '../../styles/sidemenu/changeBackground.css';

class ChangeBackground extends React.Component {
    constructor() {
        super();

        this.data = ColorsData.data();
    }

    render () {
        const items = this.data.map((item,index) => {
            let color = "#" + item.toString(16);
            return <div key={index} className="color-item" style={{background: color}}/>
        });

        return (
            <div className="color-container">
                {items}
            </div>
        );
    }
}

export default ChangeBackground;