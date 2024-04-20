import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    auth:null
}
export const authSlice = createSlice({
initialState,
name:"auth",
reducers:{
    setAuth:(state, action)=>{
        state = action.payload;
    },
    getAuth :(state)=>{
        return state;
    }
}
})

export const {getAuth, setAuth} = authSlice.actions;
export default authSlice.reducer;