import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filters',
    initialState: [] as string[],
    reducers: {
        add(state, action) {
            const alreadyExist = state.find(tag => tag === action.payload);

            if(alreadyExist) return state;

            return [...state, action.payload];
        },
        remove(state, action) {
            return state.filter(tag => tag !== action.payload);
        },
        clear() {
            return [];
        }
    }
})

export default filtersSlice.reducer;
export const { add, remove, clear } = filtersSlice.actions;