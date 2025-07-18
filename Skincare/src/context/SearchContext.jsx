import React, { createContext, useState } from 'react';

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery, filteredProducts, setFilteredProducts }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
