import {IWeatherItem, WeatherTypes} from "./types";
import RainySound from "./resources/sounds/rain.mp3";
import SummerSound from "./resources/sounds/summer.mp3";
import WinterSound from "./resources/sounds/winter.mp3";
import './index.scss';

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

const backgroundImageElement: HTMLDivElement = document.querySelector('.container');
backgroundImageElement.className = `container-${weatherList[0].type}`;

const weatherItemsContainerElement: HTMLDivElement = document.querySelector('.items-container');
const volumeControlInputElement: HTMLInputElement = document.querySelector('.volume-control');
let currentAudio: HTMLAudioElement;

volumeControlInputElement.addEventListener('change', () => {
   if(currentAudio) {
       currentAudio.volume = +volumeControlInputElement.value;
   }
});

const handleWeatherItemClick = (weatherElement: HTMLDivElement, {type, audioInstance}: IWeatherItem) => {
    backgroundImageElement.className = `container-${type}`;

    if(!currentAudio || currentAudio !== audioInstance) {
        document.querySelector('.paused')?.classList.remove('paused');
        currentAudio?.pause();

        currentAudio = audioInstance;
        currentAudio.play();
    } else if (currentAudio === audioInstance && !currentAudio.paused) {
        currentAudio.pause();
        weatherElement.classList.add('paused');
    } else {
        currentAudio.play();
        weatherElement.classList.remove('paused');
    }

    currentAudio.volume = +volumeControlInputElement.value;
};

weatherList.forEach(weatherItem => {
   const newWeatherElement = document.createElement('div');
   newWeatherElement.className = `item-${weatherItem.type}`;
   newWeatherElement.addEventListener('click', () => handleWeatherItemClick(newWeatherElement, weatherItem));

    weatherItemsContainerElement.appendChild(newWeatherElement);
});

