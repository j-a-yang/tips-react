import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ShiftCard from "./ShiftCard";
import { getShifts } from '../redux/shiftSlice';


const Dashboard = () => {
    const navigate = useNavigate();
    const { shiftList, loading, error } = useSelector((state) => state.shifts);
    const dispatch = useDispatch();

    const handleAddShift = () => {
        navigate("/create");
    }

    useEffect(() => {
        dispatch(getShifts());
    }, [dispatch]);
   
    
    return (
        <div>
            <div className="container">
                {loading && <h3>Loading...</h3>}
                {error && <h3>Something went wrong...</h3>}
                {shiftList && shiftList.map((shift) => <ShiftCard shift={shift}/>)}
                <button onClick={handleAddShift}>Add Shift</button>
            </div>
        </div>
    );
    
}

export default Dashboard;