import React, {Component} from 'react';


class Search extends Component {
    state = {
        text: ''
    }

    onSubmit = (e) => {
        this.props.searchCity(this.state.text);
        e.preventDefault();
    }

    onChange = (e) => {
        this.setState({
            text: e.target.value
        })
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
                </form>
            </div>
        );
    }
}


export default Search;