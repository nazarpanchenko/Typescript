import React from 'react';

class SearchBar extends React.Component {
    constructor({ filterText, inStockOnly, onFilterTextChange, onInStockChange }) {
      super(props);
    }
    
    handleFilterTextChange = (e) => {
      onFilterTextChange(e.target.value);
    }
    
    handleInStockChange = (e) => {
      onInStockChange(e.target.checked);
    }
    
    render() {
      return (
        <form>
          <input
            type="text"
            placeholder="Search..."
            value={filterText}
            onChange={this.handleFilterTextChange}
          />
          <p>
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={this.handleInStockChange}
            />
            {' '}
            Only show products in stock
          </p>
        </form>
      );
    }
  }

export default SearchBar;