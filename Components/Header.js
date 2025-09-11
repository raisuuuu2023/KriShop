import Image from 'next/image';
import React from 'react';
import logo from '../public/logo.png';
const Header = ({ viewCart }) => {
  return (
    <header>
      <div className="flex items-center justify-between p-4 border-b border-gray-300">
        <div className="flex items-center">
          <Image src={logo} alt="KriShop Logo" height ={48} width={48} className="w-12 h-12 object-contain" />
          <h1 className="text-5xl ml-2 text-green-700">Kri<span className="text-black">Shop</span></h1>
        </div>
        
        <div className="flex items-center border-2 border-gray-300 rounded-full px-4 py-2 w-96 bg-white">
          <input 
            type="text" 
            placeholder="Search for products" 
            className="border-none outline-none flex-1 text-lg"
          />
          <i className="fas fa-search text-gray-600"></i>
        </div>
        
        <div className="flex gap-5 items-center">
          <div className="flex flex-col items-center cursor-pointer">
            <i className="fas fa-id-card text-xl mb-1"></i>
            <span>Profile</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <i className="fas fa-user text-xl mb-1"></i>
            <span>Login</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer">
            <i className="fas fa-headset text-xl mb-1"></i>
            <span>Contact</span>
          </div>
          <div className="flex flex-col items-center cursor-pointer" onClick={viewCart}>
            <i className="fas fa-shopping-cart text-xl mb-1"></i>
            <span>Cart</span>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly items-center bg-gray-200 py-3 text-sm text-center">
        <div className="max-w-[30%] font-bold text-red-700">
          নিরাপদ পেমেন্ট <br />
          <small className="font-normal text-black">বিভিন্ন পেমেন্ট পদ্ধতি থেকে বেছে নিন</small>
        </div>
        <div className="max-w-[30%] font-bold text-red-700">
          ফ্রি ডেলিভারি <br />
          <small className="font-normal text-black">৩-৫ দিনের মধ্যে আপনার পণ্য পৌঁছে যাবে</small>
        </div>
        <div className="max-w-[30%] font-bold text-red-700">
          ১০০% ন্যাচারাল <br />
          <small className="font-normal text-black">প্রাকৃতিক উৎপাদন ব্যবস্থার প্রচারে আমরা প্রতিশ্রুতিবদ্ধ</small>
        </div>
      </div>
    </header>
  );
};

export default Header;