import React from "react";

const CardCountry = ({ name, flag, population, region, capital }) => {
	return (
		<div className="max-w-[300px]">
			<img loading="lazy" src={flag} alt={`Flag of ${name}`} />
			<div className="p-2 font-light bg-white">
				<h2 className="font-bold text-xl">{name}</h2>
				<p>
					<strong className="font-semibold">Population:</strong> {population}
				</p>
				<p>
					<strong className="font-semibold">Region:</strong> {region}
				</p>
				<p>
					<strong className="font-semibold">Capital:</strong> {capital}
				</p>
			</div>
		</div>
	);
};

export default CardCountry;
