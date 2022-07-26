import { useState } from "react";
import currency from "currency-formatter";
import h2p from "html2plaintext";
import htmlParser from "html-react-parser";
import DetailsImage from "./DetailsImage";
import Quantity from "./Quantity";
const DetailsCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const inc = () => {
    setQuantity(quantity + 1);
  };
  const dec = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const percentage = product.discount / 100;
  const discountPrice = product.price - product.price * percentage;
  let desc = h2p(product.description);
  desc = htmlParser(desc);

  return (
    <div className="flex flex-wrap -mx-5">
      <div className="w-full order-2 md:order-1 md:w-6/12 p-5">
        <div className="flex flex-wrap -mx-1">
          <DetailsImage image={product.image1} />
          <DetailsImage image={product.image2} />
          <DetailsImage image={product.image3} />
        </div>
      </div>
      <div className="w-full order-1 md:order-2 md:w-6/12 p-5">
        <h1 className="text-2xl font-bold text-gray-900 capitalize">
          {product.title}
        </h1>
        <div className="flex justify-between my-5">
          <span className="text-2xl font-bold text-gray-900">
            {" "}
            {currency.format(discountPrice, { code: "USD" })}
          </span>
          <span className="text-xl line-through text-gray-500">
            {currency.format(product.price, { code: "USD" })}
          </span>
        </div>

        {product.sizes.length > 0 && (
          <>
            <h3 className="text-base font-medium capitalize text-gray-600 mb-3">
              sizes
            </h3>
            <div className="flex flex-wrap -mx-1">
              {product.sizes.map((size) => (
                <div
                  className="p-2 m-1 border border-gray-300 rounded cursor-pointer"
                  key={size.name}
                >
                  <span className="text-sm font-semibold uppercase text-gray-900">
                    {size.name}
                  </span>
                </div>
              ))}
            </div>
          </>
        )}
        {product.colors.length > 0 && (
          <>
            <h3 className="text-base font-medium capitalize text-gray-600 mb-2 mt-3">
              colors
            </h3>
            <div className="flex flex-wrap -mx-1">
              {product.colors.map((color) => (
                <div
                  key={color.color}
                  className="border border-gray-300 rounded m-1 p-1 cursor-pointer"
                >
                  <span
                    className="min-w-[40px] min-h-[40px] rounded block"
                    style={{ backgroundColor: color.color }}
                  ></span>
                </div>
              ))}
            </div>
          </>
        )}
        <div className="flex -mx-3 items-center">
          <div className="w-full sm:w-6/12 p-3">
            <Quantity quantity={quantity} inc={inc} dec={dec} />
          </div>
          <div className="w-full sm:w-6/12 p-3">
            <button className="btn btn-indigo">add to cart</button>
          </div>
        </div>
        <h3 className="text-base font-medium capitalize text-gray-600 mb-2 mt-3">
          description
        </h3>
        <div className="mt-4 leading-[27px] description">{desc}</div>
      </div>
    </div>
  );
};

export default DetailsCard;
