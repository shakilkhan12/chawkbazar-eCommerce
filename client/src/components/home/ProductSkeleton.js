import Skeleton from "../skeleton/Skeleton";
import Thumbnail from "../skeleton/Thumbnail";
import Text from "../skeleton/Text";
const ProductSkeleton = () => {
  return (
    <div className="flex flex-wrap -mx-4 mb-10">
      {[1, 2, 3, 4].map((item) => (
        <div
          className="w-6/12 sm:w-4/12 md:w-3/12 lg:w-4/12 xl:w-3/12 p-4"
          key={item}
        >
          <Skeleton>
            <Thumbnail height="320px" />
            <Text mt="10px" />
            <Text mt="10px" />
          </Skeleton>
        </div>
      ))}
    </div>
  );
};

export default ProductSkeleton;
