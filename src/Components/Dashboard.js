import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ShiftCard from "./ShiftCard";

let shifts = ["shift 1", "shift 2", "shift 3"];


const Dashboard = () => {
    const navigate = useNavigate();

    const handleAddShift = () => {
        navigate("/create");
    }
    
        return (
            <div>
                <div className="container">
                    {shifts.map((shift) => <ShiftCard shift={shift}/>)}
                    <button onClick={handleAddShift}>Add Shift</button>
                </div>
            </div>
        );
    
}

export default Dashboard;