import { createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
	name: "countries",
	initialState: {
		countryList: [],
	},
	reducers: {
		pushData: (state, action) => {
			state.countryList = action.payload;
		},
		filterData: (state, action) => {
			const result = state.countryList.filter(
				country => country.region === action.payload,
			);
			state.countryList = result;
		},
	},
});

export const { pushData, filterData } = countriesSlice.actions;

export default countriesSlice.reducer;
