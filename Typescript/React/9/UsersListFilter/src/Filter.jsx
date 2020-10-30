import React from 'react';

const Filter = ({ filterText, count, onChange }) => 
    <>
        <span className="filter__count">{count}</span>
        <input 
            type="text" 
            className="filter__input"
            value={filterText} 
            onChange={(e) => onChange(e)}
        />
    </>

export default Filter;