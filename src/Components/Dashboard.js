import React from "react";
import ShiftCard from "./ShiftCard";
import ShiftModal from "./ShiftModal";

let shifts = ["shift 1", "shift 2", "shift 3"];


class Dashboard extends React.Component {
    state = {
        modalIsOpen: false
    }

    toggleModal = () => {
        this.setState((prevState) => ({modalIsOpen: !prevState.modalIsOpen}));
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    {shifts.map((shift) => <ShiftCard shift={shift}/>)}
                    <button onClick={this.toggleModal}>Add Shift</button>
                </div>
                <ShiftModal isOpen={this.state.modalIsOpen} toggleModal={this.toggleModal}/>
            </div>
        );
    }
    
}

export default Dashboard;