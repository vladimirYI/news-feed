import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import {themeSlice} from './slices';

export const store = configureStore({
    reducer: combineReducers({
        theme: themeSlice.reducer
    }),
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }) 
});

export * from './slices';