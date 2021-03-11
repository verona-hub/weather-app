import React, { useState } from 'react';
import icon from '../../img/search.svg';
import x from '../../img/x.svg';


const Search = ({ searchCity, showClearButton }) => {

    const [ text, setText ] = useState('');

    const onSubmit = (e) => {
        searchCity(text);
        setText('');
        e.preventDefault();
    }

    const onChange = (e) => {
        setText( e.target.value );
    }

    const clearContent = () => {
        clearContent(text);
        setText('');
    }

    const clearInput = () => {
        setText('');
    }

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
                    { showClearButton && (
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
            </form>
        </div>
    );

}


export default Search;