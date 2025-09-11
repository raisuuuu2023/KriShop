import React from 'react';

const Cart = ({ cart, closeCart, increaseQuantity, decreaseQuantity, removeFromCart, checkout }) => {
  return (
    <div className="fixed top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/5 bg-white border border-gray-300 p-5 shadow-lg z-50 w-4/5 max-w-[500px] rounded-lg">
      <h2 className="text-xl text-green-700 mb-4">Your Cart</h2>
      
      <div id="cart-items">
        {cart.length === 0 ? (
          <p>No items in the cart.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="mb-3">
              <p><strong>{item.productName}</strong> - {item.quantity} x {item.price} BDT</p>
              <p>Total: {item.totalPrice.toFixed(2)} BDT</p>
              <div className="flex items-center gap-2 my-2">
                <button 
                  onClick={() => decreaseQuantity(index)}
                  className="px-2 py-1 bg-green-700 text-white border-none rounded cursor-pointer hover:bg-green-900"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button 
                  onClick={() => increaseQuantity(index)}
                  className="px-2 py-1 bg-green-700 text-white border-none rounded cursor-pointer hover:bg-green-900"
                >
                  +
                </button>
              </div>
              <button 
                onClick={() => removeFromCart(index)}
                className="px-3 py-1 bg-red-600 text-white border-none rounded cursor-pointer hover:bg-red-800"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      
      <button 
        onClick={checkout}
        className="px-5 py-2 bg-green-700 text-white border-none rounded cursor-pointer text-base mt-3 mr-2 hover:bg-green-900"
      >
        Checkout
      </button>
      <button 
        onClick={closeCart}
        className="px-5 py-2 bg-gray-600 text-white border-none rounded cursor-pointer text-base mt-3 hover:bg-gray-800"
      >
        Close
      </button>
    </div>
  );
};

export default Cart;