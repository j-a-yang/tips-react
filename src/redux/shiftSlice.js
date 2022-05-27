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
    async (shiftDetails, { rejectWithValue }) => {
        const newShiftObj = {
            id: uuid(),
            ... shiftDetails
        }

        try {
            const newShiftRef = await addDoc(shiftCollection, newShiftObj);
            // I'm not returning an action payload here at the moment.
        } catch (err) {
            return rejectWithValue([], err);
        }    
    }
);


const getShifts = createAsyncThunk(
    'shifts/getShifts',
    async (_,{ rejectWithValue }) => {
        const foundShifts = [];

        try {
            // fetch all shifts from firestore
            const response = await getDocs(shiftCollection);
            // iteratre through firestore data structure to extract shift objects.
            response.forEach((doc) => {
                foundShifts.push(doc.data());
            });

            return foundShifts;
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
            state.loading = false;
        },
        [addShift.pending]: (state, action) => {
            state.loading = true;
        },
        [addShift.rejected]: (state, action) => {
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