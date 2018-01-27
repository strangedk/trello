import React from 'react';
import StickersData from '../../data/stickersData';
import '../../styles/sidemenu/stickers.css';

class Stickers extends React.Component {
    constructor() {
        super();

        this.data = StickersData.data();
    }

    render () {
        return (
            <div className="img-stickers-container">
                {
                    this.data.map((item, index) => {
                      return (
                            <img key={index} src={item} className="img-sticker"/>
                      )
                    })
                }
            </div>
        )
    }
}

export default Stickers;