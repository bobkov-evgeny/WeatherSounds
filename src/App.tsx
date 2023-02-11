import React, {useEffect, useState} from "react";
import {IWeatherItem, WeatherTypes} from "./types";
import {WeatherItem} from "./components/WeatherItem";
import RainySound from "./resources/sounds/rain.mp3";
import SummerSound from "./resources/sounds/summer.mp3";
import WinterSound from "./resources/sounds/winter.mp3"

const weatherList: IWeatherItem[] = [
    {
        type: WeatherTypes.SUNNY,
        audioInstance: new Audio(SummerSound)
    },
    {
        type: WeatherTypes.RAINY,
        audioInstance: new Audio(RainySound)
    },
    {
        type: WeatherTypes.SNOWY,
        audioInstance: new Audio(WinterSound)
    }
];

export const App: React.FC = () => {
    const [selectedWeatherType, setSelectedWeatherType] = useState<WeatherTypes>(WeatherTypes.SUNNY);
    const [audioIsPlaying, setAudioIsPlaying] = useState<boolean>(false);

    const handleWeatherTypeChange = (weatherType: WeatherTypes) => {
        setSelectedWeatherType(weatherType);
    };
    //
    // useEffect(() => {
    //         isPlaying ? audioInstance.pause() : audioInstance.play();
    //     audioInstance.addEventListener('ended', () => setIsPlaying(false));
    //
    //     return () => {
    //         audioInstance.removeEventListener('ended', () => setIsPlaying(false));
    //     }
    // }, [isPlaying]);

    return (
        <div className={`container-${selectedWeatherType}`}>
            <div className={'content'}>
                <span className={'header'}>
                    Weather Sounds
                </span>

                <div className={'items-container'}>
                    {weatherList.map(({type}) => (
                        <WeatherItem weatherType={type} />
                    ))}
                </div>
            </div>

            <div className={"blurred-layer"} />
        </div>
    );
};