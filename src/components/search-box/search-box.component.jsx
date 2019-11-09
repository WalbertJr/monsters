import React from 'react';

import './search-box.styles.css';

/*function App(){
    return <h1>HI</h1>
}*/

/*export const SearchBox = props =>(
    <input className='search-box'
        type='search'
        placeholder='search monsters'
        onChange={props.onSearchChange}
    />
)*/

export const SearchBox = ({placeholder, handleChange})=>(
    <input
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
)