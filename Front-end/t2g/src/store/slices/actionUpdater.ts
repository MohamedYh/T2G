import { ProjectData } from "@/interfaces/project";
import { createSlice } from "@reduxjs/toolkit";

interface ActionObject {
    action: number;
}

const initialState: ActionObject = {
    action: 0,
};

const updateActionSlice = createSlice({
    name: "actionUpdater",
    initialState: initialState,
    reducers: {
        updateAction: (state) => {
            state.action += 1;
            return state;
        },
        reset: (state) => {
            state.action = 0;
        },
    },
});

export const { updateAction, reset } = updateActionSlice.actions;

export default updateActionSlice.reducer;
