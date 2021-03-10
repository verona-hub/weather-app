import React, {Fragment} from 'react';
import { css } from '@emotion/react';
import PropagateLoader from "react-spinners/PropagateLoader";
import SyncLoader from "react-spinners/SyncLoader";
import ClipLoader from "react-spinners/ClipLoader";
import BarLoader from "react-spinners/BarLoader";


const Spinner = () => {
    const override = css`
        display: inline-block;
        `;

    return (
        <Fragment>
            {/*<PropagateLoader color={'#c57d26'} css={override} size={20}/>*/}
            {/*<SyncLoader color={'#c57d26'} css={override} size={20}/>*/}
            {/*<ClipLoader color={'#c57d26'} css={override} size={60}/>*/}
            <BarLoader color={'#54e334'} css={override} size={20}/>
        </Fragment>
    )
}



export default Spinner;
