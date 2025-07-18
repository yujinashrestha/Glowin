import React, { useEffect, useContext } from 'react';
import ProductCard from '../components/ProductCard';
import Skincareproducts from '../Data/Data';
import Layout from '../components/Layout';
import Routetransition from '../components/Routetransition';
import SearchContext from '../context/SearchContext'; // assuming default export

function Search() {
  const {
    searchQuery,
    setSearchQuery,
    filteredProducts,
    setFilteredProducts,
  } = useContext(SearchContext);

  useEffect(() => {
    if(searchQuery.trim() === '') {
      setFilteredProducts([]); } 
      else {
    const filtered = Skincareproducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }
  }, [searchQuery]);

  return (
    <Layout>
      <Routetransition>
        <div className="px-4 py-6 ">
          <h2 className="text-xl font-semibold mt-12 text-center mb-6">
            Showing Results for:{" "}
            <span className="text-blue-600">"{searchQuery}"</span>
          </h2>

          {filteredProducts.length > 0 ? (
            <div className="flex flex-wrap gap-4 justify-center">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center mt-12 text-gray-500">
  <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 mb-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
  </svg>
  <h3 className="text-lg font-semibold">No products found</h3>
  <p className="text-sm">Try adjusting your search or browsing another category.</p>
</div>

          )}
        </div>
      </Routetransition>
    </Layout>
  );
}

export default Search;
