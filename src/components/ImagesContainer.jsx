import { useState } from 'react';

const ImagesContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    "public/image-product-1.jpg",
    "public/image-product-2.jpg",
    "public/image-product-3.jpg",
    "public/image-product-4.jpg"
  ];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const showSlide = (index) => {
    setCurrentSlideIndex(index);
  };

  const handlePrev = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
        <div className='flex gap-8'>

      {
          images.map((image, index) => (
              <img
              key={index}
              className="w-full max-h-20 rounded-lg cursor-pointer hover:opacity-40 transition-all duration-300 object-contain"
              src={image}
              alt="Product"
              onClick={openModal}
              />
              ))
            }
            </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-8 rounded shadow-lg w-full max-w-2xl">
            <button
              className="absolute top-2 right-2 text-2xl font-bold text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="modal-body flex flex-col items-center">
              <div className="slider relative w-full flex items-center">
                <button
                  className="absolute left-0 text-3xl font-bold text-gray-600 hover:text-gray-800"
                  onClick={handlePrev}
                >
                  &#10094;
                </button>
                <img
                  className="w-full max-h-96 object-contain"
                  src={images[currentSlideIndex]}
                  alt="Product"
                />
                <button
                  className="absolute right-0 text-3xl font-bold text-gray-600 hover:text-gray-800"
                  onClick={handleNext}
                >
                  &#10095;
                </button>
              </div>
              <div className="thumbnails flex mt-4 space-x-2">
                {images.map((image, index) => (
                  <img
                    key={index}
                    className={`w-16 h-16 object-cover cursor-pointer border ${index === currentSlideIndex ? 'border-blue-500' : 'border-transparent'} rounded`}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => showSlide(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImagesContainer;
