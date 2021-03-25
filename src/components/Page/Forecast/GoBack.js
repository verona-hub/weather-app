import React from 'react';
import { useHistory } from "react-router-dom";

function GoBack() {
    let history = useHistory();

    function goBack () {
        history.goBack();
    }

    return (
        <button type="button" onClick={ goBack }>
            Go back
        </button>

    );
}

export default GoBack;