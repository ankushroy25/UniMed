import React from "react";
import PRODUCTS from "../data.js";
import { Link } from "react-router-dom";
import "../App.css";

const ProductsCarousel = () => {
  const circularProducts = [...PRODUCTS, PRODUCTS[0]];
  return (
    <div>
      <h2 className="text-3xl font-semibold my-8">You May Also Like</h2>
      <div className="carousel-container">
        <div className="carousel">
          {circularProducts.map((product, index) => (
            <div key={index}>
              <Link to={`/products/${product.id}`}>
                <div className="h-full mr-4 rounded-lg border border-gray-100 bg-white shadow-md">
                  <div className="h-40 p-4">
                    <img src={product.img} alt={product.title} />
                  </div>
                  <div className="mt-4 px-5 pb-5">
                    <h5 className="text-xl tracking-tight text-slate-900">
                      {product.title}
                    </h5>
                    <div className="mt-2 mb-5 flex items-center justify-between">
                      <p>
                        <span className="text-xl font-bold text-slate-900">
                          ${product.newPrice}
                        </span>
                        <span className="text-sm text-slate-900 line-through">
                          ${product.prevPrice}
                        </span>
                      </p>
                      <div className="flex items-center">
                        <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                          5.0
                        </span>
                        <svg
                          aria-hidden="true"
                          className="h-5 w-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsCarousel;
