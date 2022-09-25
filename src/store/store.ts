import {configureStore} from "@reduxjs/toolkit";
import generalSlice from "../features/generalSlice"

const store = configureStore({
    reducer: {
        general: generalSlice,
    }
})

export default store;

export type rootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;