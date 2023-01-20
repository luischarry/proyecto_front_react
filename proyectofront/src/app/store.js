
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../pages/User/userSlice';
import serieSlice from '../pages/serieSlice';

export default configureStore({
    reducer: {
        user: userSlice,
        serie: serieSlice
    }
    
});