import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    name:"",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        addName: (state, action) => {
            state.name = action.payload
        } 
    }
})

export const {addName} = userSlice.actions;
export default userSlice.reducer;