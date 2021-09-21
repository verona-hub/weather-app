import React, {Fragment} from 'react';
import { css } from '@emotion/react';
import PuffLoader from "react-spinners/PuffLoader";


const Spinner = ({ darkMode }) => {
    const override = css`
        display: inline-block;
        margin: 3vh auto;
        `;

    const spinnerColor = darkMode ? '#FF01D3' : '#00A7D8';

    return (
        <Fragment>
            <PuffLoader color={spinnerColor} css={override} size={120}/>
        </Fragment>
    )
}



export default Spinner;
