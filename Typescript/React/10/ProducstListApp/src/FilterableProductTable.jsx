import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        inStockOnly: false
      };
    }
  
    handleFilterTextChange = (filterText) => {
      this.setState({
        filterText: filterText
      });
    }
    
    handleInStockChange = (inStockOnly) => {
      this.setState({
        inStockOnly: inStockOnly
      })
    }
  
    render() {
      const { filterText, inStockOnly } = this.state,
        { products } = this.props;

      return (
        <div>
          <SearchBar
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFilterTextChange={this.handleFilterTextChange}
            onInStockChange={this.handleInStockChange}
          />
          <ProductTable
            products={products}
            filterText={filterText}
            inStockOnly={inStockOnly}
          />
        </div>
      );
    }
  }

export default FilterableProductTable;;