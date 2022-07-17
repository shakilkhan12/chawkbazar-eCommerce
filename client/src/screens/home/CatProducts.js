import { useParams, Link } from "react-router-dom";
import currency from "currency-formatter";
import Header from "../../components/home/Header";
import Nav from "../../components/home/Nav";
import Text from "../../components/skeleton/Text";
import Skeleton from "../../components/skeleton/Skeleton";
import Thumbnail from "../../components/skeleton/Thumbnail";
import { useCatProductsQuery } from "../../store/services/homeProducts";

const CatProducts = () => {
  const { name, page = 1 } = useParams();
  const { data, isFetching } = useCatProductsQuery({
    name,
    page: parseInt(page),
  });
  console.log(data, isFetching);
  console.log(name, page);
  return (
    <>
      <Nav />
      <div className="mt-[70px]">
        <Header>#{name}</Header>
      </div>
      <div className="my-container my-10">
        {isFetching ? (
          <div className="flex flex-wrap -mx-4 mb-10">
            {[1, 2, 3, 4].map((item) => (
              <div
                className="w-6/12 sm:w-4/12 md:w-3/12 lg:w-4/12 xl:w-3/12 p-4"
                key={item}
              >
                <Skeleton>
                  <Thumbnail />
                  <Text mt="10px" />
                  <Text mt="10px" />
                </Skeleton>
              </div>
            ))}
          </div>
        ) : data.count > 0 ? (
          <>
            <p className="text-base font-medium text-gray-700">
              {data.count} products found in #{name} category
            </p>
            <div className="flex flex-wrap -mx-5">
              {data.products.map((product) => {
                const percentage = product.discount / 100;
                const discountPrice =
                  product.price - product.price * percentage;
                console.log(discountPrice);
                return (
                  <div
                    className="w-full md:w-3/12 px-5 py-10"
                    key={product._id}
                  >
                    <Link to="/">
                      <div className="w-full">
                        <img
                          src={`/images/${product.image1}`}
                          alt="product image"
                          className="w-full h-[310px] object-cover"
                        />
                      </div>
                      <p className="capitalize text-base font-medium text-black my-2.5">
                        {product.title}
                      </p>
                      <div className="flex justify-between">
                        <span className="text-lg font-medium text-black">
                          {currency.format(discountPrice, { code: "USD" })}
                        </span>
                        <span className="text-lg font-medium text-gray-600 line-through">
                          {currency.format(product.price, { code: "USD" })}
                        </span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <p className="alert-danger">No products found in #{name} category</p>
        )}
      </div>
    </>
  );
};

export default CatProducts;
