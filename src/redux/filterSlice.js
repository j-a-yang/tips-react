import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: "filters",
    initialState: {
        sortBy: "amount", //date or amount
        startDate: undefined,
        endDate: undefined
    },
    reducers: {
        addShift: (state, action) => {
            const shift = {
                id: new Date(),
                title: action.payload.title,
                tips: 0
            };
            state.push(shift);
        }
    }
});

export const { addShift } = shiftSlice.actions;
export default shiftSlice.reducer;