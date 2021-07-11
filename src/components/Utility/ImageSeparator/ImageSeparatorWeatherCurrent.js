import imageSeparatorFunc from './ImageSeparatorFunction';


const ImageSeparatorWeatherCurrent = ({ weatherCondition }) => {
    // Destructured the fetched weather condition text
    const { text } = weatherCondition;
    // Return the image that matches the forecast text
    return imageSeparatorFunc(text);
};


export default ImageSeparatorWeatherCurrent;
