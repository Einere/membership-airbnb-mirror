import React, {useState} from 'react';
import Modal from "./Modal";

function FilterButton(props) {
    const [filterType, setFilterType] = useState(props.filterType);
    const [showModal, setShowModal] = useState(false);

    function triggerFilterModal() {
        setShowModal(!showModal);
    }

    return (
        <>
            <button className={"filter-button"} onClick={triggerFilterModal}>{filterType}</button>
            <Modal show={showModal}>
                {/* FilterBar로부터 받은 filter type에 따라 적절한 filter를 넣는다 */}
            </Modal>
        </>
    );
}

export default FilterButton;