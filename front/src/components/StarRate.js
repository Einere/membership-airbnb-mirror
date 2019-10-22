import React from 'react';
import '../stylesheet/StarRate.css';

function starRate(props) {
    const rate = props.rate / 5 * 100;
    const style = {
        backgroundImage: `linear-gradient(90deg, #fc0 ${rate}%, #fff ${rate}%)`
    };

    return (
        <div style={style} className={"star-rate"}>★★★★★</div>
    )
}

export default starRate;