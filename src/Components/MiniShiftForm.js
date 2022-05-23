import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addShift } from "../redux/shiftSlice";

const MiniShiftForm = () => {
    const [ value, setValue ] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (value) {
            dispatch(addShift({
                title: value
            }));
        }
    };

    return (
        <div>
            <h1>Shift Form</h1>
        
            <form onSubmit={onSubmit} className="shift-form">
                <label>Shift Text</label>
                <input type="text" placeholder="dummy text here" value={value} onChange={handleChange}/>
                
                <button type="submit">Save Shift</button>
            </form>
        
        </div>
    )
}

export default MiniShiftForm;
