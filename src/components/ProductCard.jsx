import React from 'react';

const ProductCard = ({product}) => {
  return (
    <>
      <div className="text-orange-600 font-semibold uppercase tracking-wide font-bold">Sneaker Company</div>
      <h1 className="mt-7 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>
      <p className="mt-8 text-gray-600 opacity-85">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.
      </p>

      <div className="mt-6 flex items-center">
        <div className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</div>
        <div className="ml-3 text-lg font-semibold text-orange-600 bg-orange-100 rounded px-2">50%</div>
      </div>
      <div className="mt-2 text-gray-500 line-through">$250.00</div>
      
    </>

  );
};

export default ProductCard;