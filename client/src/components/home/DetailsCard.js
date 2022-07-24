import currency from "currency-formatter";
import h2p from "html2plaintext";
const DetailsCard = ({ product }) => {
  const percentage = product.discount / 100;
  const discountPrice = product.price - product.price * percentage;
  console.log("details: ", product);
  return (
    <div className="flex flex-wrap -mx-5">
      <div className="w-full sm:w-6/12 p-5">
        <div className="flex flex-wrap -mx-1">
          <div className="w-full sm:w-6/12 p-1">
            <img
              src={`/images/${product.image1}`}
              alt="image1"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full sm:w-6/12 p-1">
            <img
              src={`/images/${product.image2}`}
              alt="image2"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full sm:w-6/12 p-1">
            <img
              src={`/images/${product.image3}`}
              alt="image3"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full sm:w-6/12 p-5">
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
        <h3 className="text-base font-medium capitalize text-gray-600 mb-2 mt-3">
          description
        </h3>
        <p>{h2p(product.description)}</p>
      </div>
    </div>
  );
};

export default DetailsCard;
