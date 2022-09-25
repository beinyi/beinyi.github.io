import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CreateDate, DateInfo} from "../utils/createDate";

type generalState = {
    selectedDate: DateInfo,
}

const initialState: generalState = {
    selectedDate: CreateDate(),
}

const generalSlice = createSlice(
    {
        name: "general",
        initialState,
        reducers: {
            setSelectedDate: (state, action: PayloadAction<DateInfo>) => {
                state.selectedDate = action.payload;
            }
        }
    }
)

export const {setSelectedDate} = generalSlice.actions

export default generalSlice.reducer;