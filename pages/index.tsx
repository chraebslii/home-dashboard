import Calendar from "@components/elements/Calendar";
import Clock from "@components/elements/Clock";
import Forecast from "@components/elements/Forecast";
import Weather from "@components/elements/Weather";
import Layout from "@components/Layout";
import { Grid } from "@mui/material";
import React from "react";

const App = () => (
	<Layout>
		<Grid container direction={ "column" } sx={ {
			backgroundColor: "background.default",
			padding: "1rem",
		} }
		>
			<Grid container item xs={ 2 }>
				<Clock size={ 2 } />
				<Grid item xs={ 8 } className="news"></Grid>
				<Weather size={ 2 } />
			</Grid>
			<Grid container item xs={ 8 }>
				<Calendar size={ 5 } />
				<Grid item xs={ 5 } className="main"></Grid>
				<Forecast size={ 2 } />
			</Grid>
			<Grid container item xs={ 2 }>
				<Grid item xs={ 12 } className="action"></Grid>
			</Grid>
		</Grid>
	</Layout>
);

export default App;