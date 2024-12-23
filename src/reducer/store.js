import { configureStore } from '@reduxjs/toolkit';
import formSlice from '../store/formSlice'

export const store = configureStore({
    reducer:{
        data:formSlice,
    }
})
export default store;