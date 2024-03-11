import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import data from "../data.js";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";
import { ShopContext } from "../context/ShopContext.jsx";
import ProductsCarousel from "../components/ProductsCarousel.jsx";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemAmount = cartItems[id];
  useEffect(() => {
    const foundProduct = data.find((item) => item.id === parseInt(id, 10));

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      console.log("Product not found");
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="antialiased  mx-auto min-h-screen bg-gray-300 px-8 pb-10">
      <div className="relative block md:flex items-center">
        <div className="my-8 w-full md:w-1/2 relative z-1 bg-gray-100 rounded shadow-lg overflow-hidden">
          <img
            src={product.img}
            alt={product.title}
            className="w-auto h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 relative z-0 px-8 md:px-0 md:py-16">
          <div className="bg-blue-900 text-white rounded-b md:rounded-b-none md:rounded-r shadow-lg overflow-hidden">
            <div className="text-2xl font-medium uppercase p-8 text-center border-b border-blue-400 tracking-wide">
              {product.title}
            </div>
            <div className="flex flex-row justify-center text-lg md:text-3xl max-w-sm mx-auto mt-8 text-white px-8 lg:px-0">
              <p className=" font-semibold mr-2">${product.newPrice}</p>
              <p className=" text-gray-400 line-through">{product.prevPrice}</p>
            </div>
            <div className="mt-8 border border-blue-700 mx-8 lg:mx-16 flex flex-wrap">
              <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-b border-blue-700">
                Color : {product.color}
              </div>
              <div className="flex items-center justify-center w-1/2 text-center p-4 border-b border-blue-700">
                Category : {product.category}
              </div>
              <div className="flex items-center justify-center w-1/2 text-center p-4 border-r border-blue-700">
                Company: {product.company}
              </div>
              <div className="flex items-center justify-center w-1/2 text-center p-4">
                {product.rating} <AiFillStar color="orange" className="mt-1" />
                <p className="">{product.reviews}</p>
              </div>
            </div>

            <a
              className=" flex flex-col items-center justify-center bg-blue-600 hover:bg-red-500 p-8 text-lg font-semibold text-white uppercase mt-8"
              href="#"
              onClick={() => addToCart(product.id)}
            >
              Add to cart
              {cartItemAmount > 0 ? <>({cartItemAmount})</> : ""}
              <AiOutlineShoppingCart size={20} />
            </a>
          </div>
        </div>
      </div>

      <ProductsCarousel />
    </div>
  );
};

export default ProductDetailPage;
