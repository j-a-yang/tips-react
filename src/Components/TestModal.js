import React from "react";
import Modal from "react-modal";
import ShiftForm from "./ShiftForm";

class TestModal extends React.Component {

    render() {
       
        return (
            <Modal
                isOpen={this.props.isOpen}
                contentLabel="test modal"
            >
                <h1>Shift Modal</h1>
                <ShiftForm/>
                <button onClick={this.props.toggleModal}>close</button>
            </Modal>
        )
    }
}

export default TestModal;