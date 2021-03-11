import React, {Fragment} from 'react';
import { css } from '@emotion/react';
import PuffLoader from "react-spinners/PuffLoader";
import ScaleLoader from "react-spinners/ScaleLoader";


const Spinner = () => {
    const override = css`
        display: inline-block;
        margin-top: 5vh;
        `;

    return (
        <Fragment>
            <PuffLoader color={'#00A7D8'} css={override} size={120}/>
            {/*<ScaleLoader color={'#d46736'} css={override} />*/}
        </Fragment>
    )
}



export default Spinner;
