import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import queries from "../graphql/queries";
import RoomCard from '../components/RoomCard';
import '../stylesheet/RoomCardList.css';

function RoomCardList(props) {
    const {loading, error, data} = useQuery(queries.getRooms);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    // const result = data.getRooms.map(room => <li key={room.id}><img src={room.image} alt="thumbnail"/>{room.title}</li>);
    const result = data.getRooms.map(room => <RoomCard key={room.id} id={room.id} image={room.image} title={room.title}
                                                       options={room.options}/>);

    return (
        <>
            <ul className={"card-list"}>
                {result}
            </ul>
        </>
    );
}

export default RoomCardList;