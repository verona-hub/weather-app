import React, {Component} from 'react';


class Search extends Component {
    state = {
        text: ''
    }

    onSubmit = (e) => {
        if (this.state.text === '') {
            this.props.setAlert('Search box is empty. Please enter a city');
        } else {
            this.props.searchCity(this.state.text);
            this.setState({ text: '' });
        }
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


    render() {
        return (
            <div>
                <h1 className="title"> Weather forecast </h1>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text"
                           value={this.state.text}
                           onChange={this.onChange}
                           name="text"
                           placeholder="Search the city here..."
                    />
                    <input type="submit"
                           value="Search City"
                           className="button button-dark button-block"
                    />
                    {
                        this.props.showClearButton && (
                            <button
                                className="button button-clear button-block"
                                onClick={this.clearContent}
                            > Clear
                            </button>
                        )
                    }
                </form>
            </div>
        );
    }
}


export default Search;