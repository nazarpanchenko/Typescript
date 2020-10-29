import React from 'react';

class Search extends React.Component {
    state = { value : '' };

    handleChange = e => {
        this.setState({ value : e.target.value });
    }

    search = e => {
        e.preventDefault();
        alert('Search text: ' + this.state.value);
    }

    render() {
        return (
            <form className="search" onSubmit={this.search}>
                <input 
                    type="text" 
                    onChange={this.handleChange} 
                    value={this.state.value} 
                    className="search__input" 
                />
                <button type="submit" className="search__button">
                    Search
                </button>
            </form>
        );
    }
}

export default Search;