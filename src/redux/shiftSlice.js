import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import db from '../firebase/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';

const initialState = {
    shiftList: [],
    loading: false,
    error: ''
};

// get firestore reference to the shifts collection.
const shiftCollection = collection(db, 'shifts');

// async addshift thunk action creater.
const addShift = createAsyncThunk(
    'shifts/addShift',
    async (newShiftObj, { rejectWithValue }) => {
        try {
            const newShiftRef = await addDoc(shiftCollection, newShiftObj);
        } catch (err) {
            console.log('add shift error', err);
            return rejectWithValue([], err);
        }    
    }
);


const getShifts = createAsyncThunk(
    'shifts/getShifts',
    async ( _, {rejectWithValue}) => {
        try {
            console.log("I'm here");
            return await getDocs(shiftCollection);
        } catch (err) {
            return rejectWithValue([], err);
        }
    }
);

export const shiftSlice = createSlice({
    name: "shifts",
    initialState,
    reducers: {},
    extraReducers: {
        [addShift.fulfilled]: (state, action) => {
            console.log(addShift.fulfilled);
            console.log('async addshift fulfilled', action.payload);
            state.loading = false;
        },
        [addShift.pending]: (state, action) => {
            console.log("pending");
            state.loading = true;
        },
        [addShift.rejected]: (state, action) => {
            console.log('addShift rejected', action.error);
            state.loading = false;
            state.error = action.error;

        },
        [getShifts.fulfilled]: (state, action) => {
            state.loading = false;
            state.shiftList = action.payload;
        },
        [getShifts.pending]: (state, action) => {
            state.loading = true;
        },
        [getShifts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        }
    }
});

export { addShift, getShifts }
export default shiftSlice.reducer;