import { configureStore } from '@reduxjs/toolkit';
import registerReducer from './register/register';
import loginReducer from './login/login';

export default configureStore({
    reducer: {
        register: registerReducer,
        login: loginReducer,
    },
});
