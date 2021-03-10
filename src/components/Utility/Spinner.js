import React, {Fragment} from 'react';
import { css } from '@emotion/react';
import ClipLoader from "react-spinners/ClipLoader";
import PuffLoader from "react-spinners/PuffLoader";
import ScaleLoader from "react-spinners/ScaleLoader";


const Spinner = () => {
    const override = css`
        display: inline-block;
        margin-top: 5vh;
        `;

    return (
        <Fragment>
            {/*<ClipLoader color={'#c57d26'} css={override} size={80}/>*/}
            <PuffLoader color={'#54e334'} css={override} size={120}/>
            {/*<ScaleLoader color={'#d46736'} css={override} />*/}
        </Fragment>
    )
}



export default Spinner;
