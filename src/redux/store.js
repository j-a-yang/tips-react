import { configureStore } from "@reduxjs/toolkit";
import shiftReducer from "./shiftSlice";

export default configureStore({
    reducer: {
        shifts: shiftReducer
    },
});