import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({

    name: 'counter',
    initialState: 0,
    reducers: {
        increace(state, actions) {
            return state + 1
        },
        decrease(state, action) {
            return state - 1
        },
    },
});

const { actions, reducer } = counterSlice;
export const { increace, decrease } = actions
export default reducer

