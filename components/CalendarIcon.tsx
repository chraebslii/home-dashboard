import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import EventIcon from "@mui/icons-material/Event";
import React from "react";

const config = [
	{ name: "Home Nicholas", icon: <EventIcon sx={ { color: "#4285f4" } } /> },
	{ name: "Home Alina", icon: <EventIcon sx={ { color: "#f6bf26" } } /> },
	{ name: "Home Mami", icon: <EventIcon sx={ { color: "#ef6c00" } } /> },
	{ name: "Ferien", icon: <BeachAccessIcon sx={ { color: "#616161" } } /> },
];

export default function CalendarIcon({ calendar }: { calendar: string }){
	const icon = config.find((item) => item.name === calendar)?.icon;
	return icon ? icon : <EventIcon sx={ { color: "#ffffff" } } />;
}

