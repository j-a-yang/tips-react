import React from "react";
import TestModal from "./TestModal";


class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            modalIsOpen: false
        };
    }

    toggleModal() {
        this.setState((prevState) => ({modalIsOpen: !prevState.modalIsOpen}));
    }
    
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <button onClick={this.toggleModal}>New Shift</button>
                <TestModal isOpen={this.state.modalIsOpen} toggleModal={this.toggleModal}/>
            </div>
        );
    }
    
}

export default Dashboard;