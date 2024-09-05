import { configureStore } from "@reduxjs/toolkit";
import updateProject from "./slices/projectManger";
import updateAction from "./slices/actionUpdater";
import { ProjectData } from "@/interfaces/project";

export const store = configureStore({
    reducer: {
        updater: updateProject,
        updateAction: updateAction,
    },
});

export type AppStore = ReturnType<typeof store.getState>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
