import React, {useEffect} from 'react';
import '../stylesheet/Modal.css';

function modalReducer(filter, action) {
    switch (filter) {
        case 'init':
            return action.payload;
        case 'query': {
        }
    }
}

function Modal(props) {
    function onDelete() {

    }

    function onClose() {

    }

    useEffect(function () {

    }, [props.show]);

    return (
        <section className={props.show ? 'show' : 'non-show'}>
            <h1>modal</h1>
        </section>
    );
}

export default Modal;