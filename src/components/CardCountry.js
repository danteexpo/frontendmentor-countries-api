import React from "react";

const CardCountry = ({ name, flag, population, region, capital }) => {
	return (
		<div>
			<h2>{name}</h2>
			<img src={flag} alt={`Flag of ${name}`} />
			<p>
				<strong>Population:</strong> {population}
			</p>
			<p>
				<strong>Region:</strong> {region}
			</p>
			<p>
				<strong>Capital:</strong> {capital}
			</p>
		</div>
	);
};

export default CardCountry;
