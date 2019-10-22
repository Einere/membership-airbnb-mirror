import React from 'react';
import {Link} from 'react-router-dom';
import {useQuery} from "@apollo/react-hooks";
import queries from "../graphql/queries";

function Home() {
    const {loading, error, data} = useQuery(queries.getRooms);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    const result = data.getRooms.map(room => <li key={room.id}>{JSON.stringify(room)}</li>);

    return (
        <>
            <h1>Home</h1>
            <Link to="/">Home</Link>
            <Link to="/user/1">User 1</Link>
            <ul>
                {result}
            </ul>
        </>
    );
}

export default Home;