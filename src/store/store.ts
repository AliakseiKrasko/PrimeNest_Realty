import {configureStore} from "@reduxjs/toolkit";
import {estatesApi} from "@/store/estatesApi";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
    reducer: {
        [estatesApi.reducerPath]: estatesApi.reducer,
        filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(estatesApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>