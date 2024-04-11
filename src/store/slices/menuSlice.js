import {createSlice, current} from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid'

const initialState = []
export const menuSlice = createSlice({
    name:"menu",
    initialState,
    reducers:{
        getMenus:(state)=>{
            return state;
        },
        addMenu:(state, action)=>{
            const uuid = uuidv4();
            const menu = {...action.payload, id:uuid}
            state.push(menu);
        },
        removeMenu:(state, action)=>{
            const filtered = state.filter((menu)=>{
                return (menu.id!= action.payload)
            })
            return filtered;
        },
    }
})

export const {addMenu, removeMenu, getMenus} =  menuSlice.actions;
export default menuSlice.reducer


