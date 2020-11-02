import React from 'react';

import './search-box.styles.css';

export  const SearchBox = ({ placeholder,handleChange }) => (
    <input
    // linking the search box with styling name search
    className='search'
     type='search' 
     placeholder={placeholder}
    //  Synthetic events are events which occur when our DOM changes like onChange.
     onChange={handleChange}

     />
)