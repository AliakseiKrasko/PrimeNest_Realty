import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FiltersState {
    city: string;
    type: string;
    minPrice: number | "";
    maxPrice: number | "";
}

const initialState: FiltersState = {
    city: "",
    type: "",
    minPrice: "",
    maxPrice: "",
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setFilters(state, action: PayloadAction<Partial<FiltersState>>) {
            return { ...state, ...action.payload };
        },
        resetFilters() {
            return initialState;
        },
    },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer