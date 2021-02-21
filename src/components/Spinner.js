import React, {Fragment} from 'react';
import { css } from '@emotion/react';
import FadeLoader from "react-spinners/FadeLoader";


const Spinner = () => {
    const override = css`
        display: block;
        margin: 0 auto;
        `;

    return (
        <Fragment>
            <FadeLoader color={'grey'} css={override}/>
            {/*<PacmanLoader color={'green'} css={override} size={40}/>*/}
        </Fragment>
    )
}



export default Spinner;
