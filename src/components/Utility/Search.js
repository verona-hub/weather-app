import React, {Component} from 'react';
import icon from '../../img/search.svg';
import x from '../../img/x.svg';
import Spinner from './Spinner';


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
                    <div className="form_content">
                        <img src={ icon } alt="search icon" className="search_icon"
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
                            className="button button_search button_block"
                        />
                        { this.props.showClearButton && (
                            <button
                                className="button button_clear button_block"
                                onClick={ clearContent }> Clear
                            </button> )
                        }
                        { text.length > 0 && (
                            <img src={x} alt="close icon" className="close_icon"
                                 onClick={ clearInput } /> )
                        }
                    </div>
                    {
                        this.props.spinner && (
                            <Spinner />
                        )
                    }
                </form>

            </div>
        );
    }
}


export default Search;