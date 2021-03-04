import React, {Component} from 'react';
import icon from '../img/search.svg';
import x from '../img/x.svg';


class Search extends Component {
    state = {
        text: ''
    }

    onSubmit = (e) => {
        this.props.searchCity(this.state.text);
        this.setState({ text: '' });
        e.preventDefault();
    }

    onChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    clearContent = () => {
        this.props.clearContent(this.state.text);
        this.setState({ text: '' });
    }

    clearInput = () => {
        this.setState({ text: '' });
    }

    render() {
        const { text } = this.state;
        const { onSubmit, onChange, clearContent, clearInput } = this;

        return (
            <div className="Search">
                <form onSubmit={ onSubmit } className="form">
                    <div className="form-content">
                        <img src={ icon } alt="search icon" className="search-icon"
                             onClick={ onSubmit } />
                        <input
                            type="text"
                            value={ text }
                            onChange={ onChange }
                            name="text"
                            placeholder="Enter a location..."
                        />
                        <input
                            type="submit"
                            value="Search"
                            className="button button-search button-block"
                        />
                        { this.props.showClearButton && (
                            <button
                                className="button button-clear button-block"
                                onClick={ clearContent }> Clear
                            </button> )
                        }
                        { text.length > 0 && (
                            <img src={x} alt="close icon" className="close-icon"
                                 onClick={ clearInput } /> )
                        }
                    </div>
                </form>
            </div>
        );
    }
}


export default Search;