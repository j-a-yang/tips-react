import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ShiftCard from "./ShiftCard";
import getShifts from '../redux/shiftSlice';

import ClipLoader from "react-spinners/ClipLoader";

const Dashboard = () => {
    const navigate = useNavigate();
    const { shiftList, loading } = useSelector((state) => state.shifts);
    const dispatch = useDispatch();

    dispatch(getShifts("hello"));

    

    const handleAddShift = () => {
        navigate("/create");
    }
    
        return (
            <div>
                <div className="container">
                    {loading && <h3>Loading...</h3>}
                    {shiftList && shiftList.map((shift) => <ShiftCard shift={shift}/>)}
                    <button onClick={handleAddShift}>Add Shift</button>
                </div>
            </div>
        );
    
}

export default Dashboard;