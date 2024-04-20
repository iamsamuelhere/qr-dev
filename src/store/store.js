import {configureStore} from '@reduxjs/toolkit'

import menuReducer from './slices/menuSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
    reducer:{
        menu: menuReducer,
        auth: authReducer
    }
})