import React, {Fragment} from 'react';
import { css } from '@emotion/react';
import PuffLoader from "react-spinners/PuffLoader";


const Spinner = () => {
    const override = css`
        display: inline-block;
        margin: 0 0 3vh;
        `;

    return (
        <Fragment>
            <PuffLoader color={'#00A7D8'} css={override} size={120}/>
        </Fragment>
    )
}



export default Spinner;
