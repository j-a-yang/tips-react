import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

export const shiftSlice = createSlice({
    name: "shifts",
    initialState: [{
        id: "",
        shiftDate: 0,
        nonCashTips: 0,
        cashTips: 0,
        bottledBeer: 0,
        draftBeer: 0,
        liquor: 0,
        sake: 0,
        wine: 0,
        totalNetSales: 0
    }],
    reducers: {
        addShift: (state, action) => {
            console.log(action);
            const shift = {
                id: uuid(),
                ...action.payload
            };
            state.push(shift);
        } 
    }
});

export const { addShift, editShift } = shiftSlice.actions;
export default shiftSlice.reducer;