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
        <section className={`modal ${props.show ? 'show' : 'non-show'}`}>
            <div id="id01" className="w3-modal">
                <div className="w3-modal-content">

                    <header className="w3-container w3-teal">
                        <span onClick="document.getElementById('id01').style.display='none'"
                              className="w3-button w3-display-topright">&times;</span>
                        <h2>Modal Header</h2>
                    </header>

                    <div className="w3-container">
                        <p>Some text..</p>
                        <p>Some text..</p>
                    </div>

                    <footer className="w3-container w3-teal">
                        <p>Modal Footer</p>
                    </footer>

                </div>
            </div>

            /* FilterButton으로부터 받은 Filter 컴포넌트를 달아준다 */
        </section>
    );
}

export default Modal;