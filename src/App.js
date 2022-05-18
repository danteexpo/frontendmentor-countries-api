import React from "react";
import CardCountry from "./components/CardCountry";

const App = () => {
	return (
		<div>
			<CardCountry
				name={"Argentina"}
				flag={
					"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/1200px-Flag_of_Argentina.svg.png"
				}
				population={40000000}
				region={"America"}
				capital={"Buenos Aires"}
			/>
		</div>
	);
};

export default App;
