import React, {Component} from 'react';


class Search extends Component {
    state = {
        text: ''
    }

    onSubmit = (e) => {
        if (this.state.text === '') {
            this.props.setAlert('Please enter a city, input is empty');
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
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text"
                           value={this.state.text}
                           onChange={this.onChange}
                           name="text"
                    />
                    <input type="submit"
                           value="Search City"
                           className="button button-dark button-block"
                    />
                    {
                        this.props.showClearButton && (
                            <button
                                className="button button-white button-block"
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