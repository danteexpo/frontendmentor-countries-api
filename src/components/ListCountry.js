import React, { useEffect, useState } from "react";
// Components
import CardCountry from "./CardCountry";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { pushData } from "../features/countries/countriesSlice";

const ListCountry = () => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	// Redux
	const countryList = useSelector(state => state.countries.countryList);
	const dispatch = useDispatch();

	// Dispatch data
	useEffect(() => {
		const dispatchAction = newData => {
			try {
				dispatch(pushData(newData));
			} catch (err) {
				console.log(err);
			}
		};

		dispatchAction(data);
	}, [data, dispatch]);

	// Fetch data
	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const res = await fetch("https://restcountries.com/v3.1/all");
				const json = await res.json();
				if (json.message === "Page Not Found") {
					throw new Error(json.message);
				}
				setData(json);
			} catch (err) {
				console.log(err);
			}
			setIsLoading(false);
		};

		fetchData();
	}, []);

	return (
		<main className="my-8 grid grid-cols-1 place-items-center gap-4">
			{isLoading && <p>Loading...</p>}
			{!isLoading && (
				<>
					{countryList && (
						<>
							{countryList &&
								countryList.map(country => (
									<CardCountry
										key={country.cca2}
										name={country.name.common}
										flag={country.flags.svg}
										population={country.population}
										region={country.region}
										capital={country.capital && country.capital[0]}
									/>
								))}
						</>
					)}
				</>
			)}
		</main>
	);
};

export default ListCountry;
