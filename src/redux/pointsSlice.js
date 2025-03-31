import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    success : 0,
    errors : 0
}

export const pointsSlice = createSlice({
    name: "points",
    initialState,
    reducers: {
        addSuccess : (state,action) => {
            state.success += action.payload
        },
        addError: (state,action) => {
            state.errors += action.payload
        },
        resetPoints : (state, action) => {
            state.success = action.payload
            state.errors = action.payload
        }
    }
})

export const {addSuccess,addError, resetPoints} = pointsSlice.actions;
export default pointsSlice.reducer;