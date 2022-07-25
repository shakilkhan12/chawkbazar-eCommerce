import Skeleton from "../skeleton/Skeleton";
import Thumbnail from "../skeleton/Thumbnail";
import Text from "../skeleton/Text";
import Circle from "../skeleton/Circle";
const ProductLoader = () => {
  return (
    <Skeleton>
      <div className="flex flex-wrap">
        <div className="w-full order-2 md:order-1 md:w-6/12 p-5">
          <div className="flex flex-wrap -mx-1">
            <div className="w-full sm:w-6/12 p-1">
              <Thumbnail height="300px" />
            </div>
            <div className="w-full sm:w-6/12 p-1">
              <Thumbnail height="300px" />
            </div>
          </div>
        </div>
        <div className="w-full order-1 md:order-2 md:w-6/12 p-5">
          <Text />
          <Text mt="12px" />
          <div className="flex -mx-2 mt-3">
            <div className="m-2">
              <Circle />
            </div>
            <div className="m-2">
              <Circle />
            </div>
            <div className="m-2">
              <Circle />
            </div>
            <div className="m-2">
              <Circle />
            </div>
          </div>
        </div>
      </div>
    </Skeleton>
  );
};

export default ProductLoader;
