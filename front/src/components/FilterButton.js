import React, {useContext, useState} from 'react';
import style from '../stylesheet/FilterButton.module.css';
import {Button, Modal} from 'react-bootstrap';
import {FilterContext} from "./context/FilterContext";
import {QueryContext} from "./context/QueryContext";
import client from "../apollo/apolloClient";
import {getProperQuery, getProperQueryParameter, getProperQueryResult} from "../utils/queryUtils";

function FilterButton(props) {
    // state
    const {state, dispatch} = useContext(FilterContext);
    const {queryState, queryDispatch} = useContext(QueryContext);
    const [filterType, setFilterType] = useState(props.filtertype);
    const [show, setShow] = useState(false);

    const deleteFilterValue = () => {
        dispatch({type: 'init', payload: 'hello'});
    };

    const triggerQuery = () => {
        setShow(false);
        // 쿼리 수행
        client.query({
            query: getProperQuery(filterType),
            variables: getProperQueryParameter(filterType, state)
        })
            .then(result => {
                // 쿼리 수행 후 queryDispatch를 이용해 queryState를 업데이트
                queryDispatch({type: 'update', payload: getProperQueryResult(filterType, result)});
            })
            .catch(error => {
                console.error(error);
                queryDispatch({type: 'init'});
            })
    };
    const showModal = () => setShow(true);
    const noShowModal = () => setShow(false);

    return (
        <>
            <button style={style} className={style.FilterButton} onClick={showModal}>{filterType}</button>

            <Modal show={show} onHide={triggerQuery} animation={true} size={'lg'}>
                <Modal.Header closeButton>
                    <Modal.Title>{filterType}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.children}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={deleteFilterValue}>
                        delete
                    </Button>
                    <Button variant="primary" onClick={triggerQuery}>
                        save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default FilterButton;