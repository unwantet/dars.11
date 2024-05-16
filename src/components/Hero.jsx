import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store';
import ProductCard from './ProductCard';
import { MdOutlineShoppingCart } from "react-icons/md";
import ImagesContainer from './ImagesContainer';


const product = {
  id: 1,
  name: 'Fall Limited Edition Sneakers',
  price: 125.00,
  image: 'public/image-product-1.jpg',
  images : ["public/image-product-1.jpg","public/image-product-2.jpg","public/image-product-3.jpg","public/image-product-4.jpg",],
};

const Hero = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <div className="w-1/2">
        <img src="public/image-product-1.jpg" alt="" className='max-w-[445px] rounded-xl' />
        <div className='flex gap-8 mt-8'>

        <ImagesContainer product={product}/>
          </div>
        </div>
        <div className="max-w-[445px] h-[426px] mx-auto mt-16 ">
          
          <ProductCard product={product}/>

          <div className="mt-4 flex items-center  gap-4"> 
        <div className="flex items-center border rounded-lg bg-base-300 btn btn-md">
          <button className="w-8 h-8 leading-10 text-gray-600 transition hover:opacity-75  text-orange-600 font-extrabold text-2xl " onClick={() => setQuantity(quantity - 1)}>-</button>
          <input
            type="text"
            className="h-10 w-16 text-center border-none bg-base-300"
            value={quantity}
            readOnly
          />
          <button className="w-10 h-10 leading-10 text-orange-600 font-extrabold text-2xl transition hover:opacity-75" onClick={() => setQuantity(quantity + 1)}>+</button>
        </div>
        <button className="flex items-center btn  bg-orange-600 text-white btn-md font-bold w-64 py-2 px-4 rounded-lg shadow hover:bg-orange-700 transition" onClick={handleAddToCart}>
        <MdOutlineShoppingCart className='mr-2' />
       Add to cart
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
