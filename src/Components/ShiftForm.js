import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addShift } from "../redux/shiftSlice";

const ShiftForm = () => {
    const dispatch = useDispatch();
    const [shiftDetails, setShiftDetails] = useState({
        shiftDate: 0,
        nonCashTips: 0,
        cashTips: 0,
        bottledBeer: 0,
        draftBeer: 0,
        liquor: 0,
        sake: 0,
        wine: 0,
        totalNetSales: 0
    });

    let navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;

        setShiftDetails((prevState) => {
            return {
                ...prevState,
                [name]: value
            };
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addShift(shiftDetails));
        navigate("/");
    }

    return (
            <div className="container">
            <form className="shift-form" onSubmit={handleSubmit}>
                <table>
                <tbody>
                <tr>
                    <td className="form-input-cell">
                    <label>Shift Date</label>
                    <input name="shiftDate" type="date" value={shiftDetails.shiftDate} onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td className="form-input-cell">
                    <label>Non-Cash Tips</label>
                    <input name="nonCashTips" type="number" value={shiftDetails.nonCashTips} onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td className="form-input-cell">
                    <label>Cash Tips</label>
                    <input name="cashTips" type="number" onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td className="form-input-cell">
                    <label>Bottled Beer</label>
                    <input name="bottledBeer" type="number" onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td className="form-input-cell">
                    <label>Draft Beer</label>
                    <input name="draftBeer" type="number" onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td className="form-input-cell">
                    <label>Liquor</label>
                    <input name="liquor" type="number" onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td className="form-input-cell">
                    <label>Sake</label>
                    <input name="sake" type="number" onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td className="form-input-cell">
                    <label>Wine</label>
                    <input name="wine" type="number" onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td className="form-input-cell">
                    <label>Total Net Sales</label>
                    <input name="totalNetSales" type="number" onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td className="form-input-cell">
                    <label>Notes</label>
                    <textarea name="notes" rows="1" onChange={handleChange}/>
                    </td>
                </tr>
                </tbody>
                </table>
                <button type="submit">Save</button>
            </form>
        
        </div>
        )
}

export default ShiftForm;