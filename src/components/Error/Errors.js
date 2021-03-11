import React, { Component } from 'react';
import * as _ from 'underscore';


class Errors extends Component {

    state = {
        error: true
    }


    clearError = () => {
        this.props.clearError(this.state.error);
    }

    render() {

    const { errorMessage, errorCode } = this.props;

        if (_.size(errorMessage) > 0) {
            switch (errorCode) {
                case 1003:
                    return (
                        <div className="alert">
                            <div className="alert-content">
                                <h2> Ooops! </h2>
                                <p> Searchbar is empty. Please enter a location... </p>
                            </div>
                            <button
                                onClick={ this.clearError }
                                className="button button_ok"
                            >
                                OK
                            </button>
                        </div>
                    )

                case 1006:
                    return (
                        <div className="alert">
                            <div className="alert-content">
                                <h2> Ooops! </h2>
                                <p>{ errorMessage }.</p>
                                <p> Please try a different one. </p>
                            </div>
                            <button className="button button_ok"> OK </button>
                        </div>
                    )

                default:
                    return (
                        <div className="alert">
                            <div className="alert-content">
                                <h2> Ooops! </h2>
                                <p>Sorry, { errorMessage } </p>
                            </div>
                            <button className="button button_ok"> OK </button>
                        </div>)
            }
        }
        else {
            return null;
        }
    }

}


export default Errors;
