import { configureStore } from "@reduxjs/toolkit";
import filter from './filtersSlice'

export const store = configureStore({
    reducer: {
        filter
    }
})