import React from 'react';
import {Link} from 'react-router-dom';
import FilterBar from "../components/FilterBar";
import RoomCardList from '../components/RoomCardList'

function Home() {
    return (
        <>
            <h1>Home</h1>
            <Link to="/">Home</Link>
            <Link to="/user/1">User 1</Link>
            <FilterBar/>
            <RoomCardList/>
        </>
    );
}

export default Home;