export interface IWeatherItem {
    type: WeatherTypes;
    audioInstance: HTMLAudioElement;
}
export enum WeatherTypes {
    SUNNY = 'sunny',
    RAINY = 'rainy',
    SNOWY = 'snowy'
}