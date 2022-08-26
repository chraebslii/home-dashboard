import { currentTestWeatherData } from "@utils/OWMTestWeatherData";
import { NextApiRequest, NextApiResponse } from "next";

const apiKey = process.env.OWM_API_KEY;
const location = {
	name: "Rumisberg",
	country: "CH",
	state: "Bern",
	lat: 47.263451,
	lon: 7.6412018,
};

const requestURL = `https://api.openweathermap.org/data/2.5/weather?lat=${ location.lat }&lon=${ location.lon }&units=metric&appid=${ apiKey }`;
const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
	if (!process.env.NEXT_PUBLIC_API_TEST) {
		await fetch(requestURL)
			.then(data => data.json())
			.then(data => {
				return {
					description: data.weather[0].main,
					icon: data.weather[0].icon,
					temperature: {
						real: data.main.temp,
						feel: data.main.feels_like,
					},
					wind: {
						direction: data.wind.deg,
						speed: data.wind.speed,
					},
					sunrise: data.sys.sunrise,
					sunset: data.sys.sunset,

					service: "openweathermap",
					cached: false,
				};
			})
			.then(data => res.status(200).json(data));
	} else {
		res.status(200).json(currentTestWeatherData());
	}
};

export default handler;
