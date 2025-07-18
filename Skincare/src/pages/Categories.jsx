import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Skincareproducts from '../Data/Data';
import ProductCard from '../components/ProductCard';
import Routetransition from '../components/Routetransition';
import Layout from '../components/Layout';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Categories() {
  const query = useQuery();
  const categoryName = query.get('category');

  const [category, setCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (categoryName) {
      setCategory(categoryName);

      const filtered = Skincareproducts.filter(
        (product) => product.category === categoryName
      );
      setFilteredProducts(filtered);
    }
  }, [categoryName]);

  return (
    <Layout>
      <Routetransition>
        <div className="px-4 py-6 h-screen">
          <h2 className="text-xl font-semibold mt-12 text-center mb-4">
            Showing Products for: <span className="text-blue-600">{category}</span>
          </h2>

          {filteredProducts.length > 0 ? (
  <div className="flex flex-wrap gap-4 justify-center">
    {filteredProducts.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
) : (
  <div className="flex flex-col items-center justify-center py-24 px-4 text-center text-gray-600">
    {/* SVG Illustration */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-40 h-40 mb-8 text-gray-300"
      fill="none"
      viewBox="0 0 64 64"
      stroke="currentColor"
      strokeWidth={2}
    >
      <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" fill="#f3f4f6"/>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 24h24M20 32h24M20 40h16"
        className="stroke-gray-400"
      />
      <path
        d="M44 44l6 6M44 50l6-6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-red-400"
      />
    </svg>

    <h3 className="text-2xl font-semibold mb-3 text-gray-700">No products found</h3>
    <p className="max-w-md text-gray-500 px-4">
      Oops! We couldn’t find any products under <span className="text-blue-600 font-medium">"{category}"</span>. 
      Try checking back later or explore other categories to find your perfect match.
    </p>
  </div>
)}

        </div>
      </Routetransition>
    </Layout>
  );
}

export default Categories;
