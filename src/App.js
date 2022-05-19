import React from "react";
import ListCountry from "./components/ListCountry";
import RegionFilter from "./components/RegionFilter";

const App = () => {
	return (
		<div>
			<RegionFilter />
			<ListCountry />
		</div>
	);
};

export default App;
