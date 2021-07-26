import { createSlice } from '@reduxjs/toolkit';

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        isRegistered: false,
    },
    reducers: {
        createPayload: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.isRegistered = true;
        },
    },
});

export const { createPayload } = registerSlice.actions;

export default registerSlice.reducer;
