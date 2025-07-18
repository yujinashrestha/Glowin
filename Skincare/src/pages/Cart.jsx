import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeCartlist,
  increaseQuantity,
  decreaseQuantity,
  clearCart
} from '../features/CartlistSlice';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Routetransition from '../components/Routetransition';

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartlist.items);

  const totalPrice = cartItems
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  return (

    <Layout>
      <Routetransition>
    <div className="max-w-5xl mx-auto mt-15 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">Your Cart</h1>

      {cartItems.length === 0 ? (
       (
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
      )) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-4 shadow-md rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-gray-500">${item.price}</p>

                  {/* Quantity controls */}
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => dispatch(decreaseQuantity(item))}
                      className="px-2 py-1 text-xl bg-gray-200 rounded-l hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-t border-b">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => dispatch(increaseQuantity(item))}
                      className="px-2 py-1 text-xl bg-gray-200 rounded-r hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <p className="text-lg font-semibold text-green-600">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => dispatch(removeCartlist(item))}
                  className="text-red-500 hover:text-red-700 mt-2"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="flex justify-end items-center border-t pt-4 mt-6">
            <div className="text-xl font-bold">
              Total: <span className="text-green-600">${totalPrice}</span>
            </div>
             <button
          onClick={() => dispatch(clearCart())}
          className="text-sm px-4 py-2 bg-red-500 ml-2.5 text-white rounded hover:bg-red-600 transition"
  >
    Clear Cart
  </button>
          </div>
          

          {/* Checkout Button */}
          <div className="flex justify-end">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
    </Routetransition>
    </Layout>
  );
}

export default Cart;
