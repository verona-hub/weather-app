import React, { useState } from 'react';
import icon from '../../img/search.svg';
import x from '../../img/x.svg';
import x_dark from '../../img/x-dark.svg';


// Search component
const Search = ({ searchCity, showClearButton, clearContent, darkMode }) => {
    // Setting the initial state: the input text is set to empty
    const [ text, setText ] = useState('');

    // On form submit function
    const onSubmit = e => {
        // pass the input query to the searchCity function, which is located inside App.js
        searchCity(text);
        // after that, set the input text to empty
        setText('');
        // prevent the browser from reloading
        e.preventDefault();
    }

    // Function that catches the input text while being typed
    const onChange = e => setText( e.target.value );

    // Function that resets the page to initial values:
    const clearAllContent = () => {
        // clearContent function located in App.js is being invoked to remove all the components beside the input
        clearContent();
        // the input goes back to being empty
        setText('');
    }

    // Function that removes any text from input and leaves it empty
    const clearInput = () => setText('');

    return (
        <div className="Search">
            <form onSubmit={ onSubmit } className="form">
                <div className={ darkMode ? "form_content_dark" : "form_content"}>
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
                    {/* If showClearButton from App.js is true, show the Clear button */}
                    { showClearButton && <button className="button button_clear button_block" onClick={ clearAllContent }> Clear </button> }

                    {/*
                    X icon appears only if the input contains at least 1 letter
                    Clicking the X icon will remove any text and set the input to be empty
                    */}
                    { text.length > 0 &&  <img src={ darkMode ? x_dark : x} alt="close icon" className="close_icon" onClick={ clearInput }/> }
                </div>
            </form>
        </div>
    );

}


export default Search;