import React from 'react';

// Images
import dog from '../../img/gif/dog.gif';

// Components
import Spinner from "./Spinner";
import Errors from "../Error/Errors";


const Modal = ({ text, spinner, errorMessage, errorCode, clearError, search, cancelSearch }) => {

    const handleCancelSearch = () => {
        cancelSearch();
    }

    return (
            <div className="Modal">
                <div className="modal_content">
                    { search && (
                        <div>
                            <h2> Your request is being processed! </h2>
                            <h2> Searching
                                <span> &ldquo;{ text }&rdquo;... </span>
                            </h2>
                            <img src={ dog } alt="a cat processing the search request" className="dog" />
                            <h2> Please wait... </h2>
                            <button onClick={handleCancelSearch} className="button button_cancel_search"> Cancel request </button>
                        </div> )
                    }

                    { spinner && ( <Spinner/> ) }

                </div>

                <Errors
                    errorMessage={ errorMessage }
                    errorCode={ errorCode }
                    clearError={ clearError }
                />
            </div>
    )
}


export default Modal;