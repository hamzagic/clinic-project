import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        email: '',
        password: '',
        logged: false
    },
    reducers: {
        login: (state, action) => {
            state.email = action.payload.email
            state.logged = true
        }
    }
});

export const { login } = loginSlice.actions;

export default loginSlice.reducer;