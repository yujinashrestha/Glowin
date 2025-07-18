import React from 'react';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';
import Routetransition from '../components/Routetransition';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

function Wishlist() {
  const wishlistProducts = useSelector((state) => state.wishlist.items);
  const productno = wishlistProducts.length;

  return (
    <Layout>
      <Routetransition>
        <div className=" px-6 py-20 bg-white">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Your Wishlist
          </h1>

          {productno > 0 ? (
            <div className="flex flex-wrap justify-center gap-6">
              {wishlistProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center mt-10 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-16 h-16 mb-4 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.65 6.65a7.5 7.5 0 010 10.6z"
                />
              </svg>
              <p className="text-lg font-medium">Your wishlist is empty</p>
             <Link
  to="/products"
  className="mt-4 px-4 py-2 bg-black text-white rounded-full 
             transition-colors transform hover:scale-110 
             hover:text-amber-400 duration-300"
>
  Browse Products
</Link>

            </div>
          )}
        </div>
      </Routetransition>
    </Layout>
  );
}

export default Wishlist;
