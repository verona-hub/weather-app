import { imageSeparatorAirQualityFunc } from './ImageSeparatorFunction';


const ImageSeparatorAirQuality = ({ airQuality }) => {
    // Destructured the fetched carbon monoxide text
    const { co } = airQuality;
    // Return the image that matches the forecast text
    return imageSeparatorAirQualityFunc(co);
};


export default ImageSeparatorAirQuality;
