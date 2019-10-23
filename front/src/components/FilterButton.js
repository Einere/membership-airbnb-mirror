import React, {useState} from 'react';
import Modal from "./Modal";
import style from '../stylesheet/FilterButton.module.css';

function FilterButton(props) {
    const [filterType, setFilterType] = useState(props.filterType);
    const [showModal, setShowModal] = useState(false);

    function triggerFilterModal() {
        setShowModal(!showModal);
    }

    return (
        <>
            <button style={style} className={style.FilterButton} onClick={triggerFilterModal}>{filterType}</button>
            <Modal show={showModal}>
                /* FilterBar로부터 받은 filter type에 따라 적절한 filter를 넣는다 */
            </Modal>
        </>
    );
}

export default FilterButton;