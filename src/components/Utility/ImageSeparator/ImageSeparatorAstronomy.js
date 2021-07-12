import { imageSeparatorAstronomyFunc } from './ImageSeparatorFunctions';


const ImageSeparatorAstronomy = ({ astronomy }) => {
    // Destructured the fetched carbon monoxide text
    const { moon_phase } = astronomy;
    // Return the image that matches the forecast text
    return imageSeparatorAstronomyFunc(moon_phase);
};


export default ImageSeparatorAstronomy;
