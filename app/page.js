"use client"; // Ensure this is a client component
import React, { useState, useEffect } from 'react';
import Header from '@/Components/Header';
import ProductCard from '@/Components/ProductCard';
import Footer from '@/Components/Footer';
import Cart from '@/Components/Cart';
import { products } from './data/product';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.productName === product.name);
    
    if (existingItem) {
      const updatedCart = cart.map(item => 
        item.productName === product.name 
          ? { 
              ...item, 
              quantity: item.quantity + 1, 
              totalPrice: (item.quantity + 1) * item.price 
            } 
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, {
        productName: product.name,
        price: product.price,
        quantity: 1,
        totalPrice: product.price
      }]);
    }
    
    alert(`${product.name} has been added to your cart.`);
  };

  const buyNow = (product) => {
    localStorage.setItem('productName', product.name);
    localStorage.setItem('productPrice', product.price);
    localStorage.setItem('productQuantity', 1);
    localStorage.setItem('productTotalPrice', product.price);
    localStorage.removeItem('selectedCartItems');
    
    // In a real app, you would navigate to the payment page
    alert(`Proceeding to buy: ${product.name}`);
  };

  const viewCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    updatedCart[index].totalPrice = updatedCart[index].quantity * updatedCart[index].price;
    setCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    if (cart[index].quantity > 1) {
      const updatedCart = [...cart];
      updatedCart[index].quantity -= 1;
      updatedCart[index].totalPrice = updatedCart[index].quantity * updatedCart[index].price;
      setCart(updatedCart);
    }
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const checkout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty.');
      return;
    }

    localStorage.setItem('selectedCartItems', JSON.stringify(cart));
    localStorage.removeItem('productName');
    localStorage.removeItem('productPrice');
    localStorage.removeItem('productQuantity');
    localStorage.removeItem('productTotalPrice');
    
    // In a real app, you would navigate to the payment page
    alert('Proceeding to checkout');
  };

  return (
    <div className="App bg-white text-black">
      <Header viewCart={viewCart} />
      
      <main className="p-5 bg-gray-300">
        <h2 className="text-4xl text-green-700 h-16">All Products</h2>
        
        <div className="flex flex-wrap justify-between gap-5">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              addToCart={addToCart} 
              buyNow={buyNow} 
            />
          ))}
        </div>
      </main>
      
      <Footer />
      
      {showCart && (
        <Cart 
          cart={cart} 
          closeCart={closeCart} 
          increaseQuantity={increaseQuantity} 
          decreaseQuantity={decreaseQuantity} 
          removeFromCart={removeFromCart} 
          checkout={checkout} 
        />
      )}
    </div>
  );
}

export default App;