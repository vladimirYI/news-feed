import {createSlice} from '@reduxjs/toolkit';

export const Themes = {
    light: 'light',
    dark: 'dark'
}

const initialState = {
    theme: Themes.light
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            if (state.theme === Themes.light) {
                state.theme = Themes.dark;
            } else {
                state.theme = Themes.light;
            }
        }
    }
})

export const selectTheme = state => state.theme;