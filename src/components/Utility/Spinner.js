import React, {Fragment} from 'react';
import { css } from '@emotion/react';
import FadeLoader from "react-spinners/FadeLoader";


const Spinner = () => {
    const override = css`
        display: block;
        position: absolute;
        top: 80vh;
        left: 50vw;
        `;

    return (
        <Fragment>
            <FadeLoader color={'#333333'} css={override} size={80} />
        </Fragment>
    )
}



export default Spinner;
