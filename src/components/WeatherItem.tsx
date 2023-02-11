import React from "react";
import {WeatherTypes} from "../types";

interface IWeatherItemProps {
    weatherType: WeatherTypes;
}

export const WeatherItem: React.FC<IWeatherItemProps> = ({weatherType}) => {

    return (
        <div
            className={`item-${weatherType}`}
        />
    )
}