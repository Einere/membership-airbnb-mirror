import React from 'react';
import StarRate from './StarRate';
import RoomCardStyle from '../stylesheet/RoomCard.css';

function RoomCard(props) {

    function book() {
        alert('book!');
    }

    return (
        <>
            <section className={"card-container"}>
                <section className={"thumbnail-container"}>
                    <img src={props.image} alt={"thumbnail"}/>
                </section>
                <section className={"room-info-container"}>
                    <span className={"room-title"}>title : {props.title}</span>
                    <span className={"room-options"}>options : {props.options}</span>
                    <StarRate rate={3.5}/>
                    <button onClick={book}>book</button>
                </section>
            </section>
        </>
    );
}

export default RoomCard;