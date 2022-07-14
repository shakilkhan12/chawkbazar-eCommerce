import { Virtual } from "swiper";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAllCategoriesQuery } from "../../store/services/categoryService";
const Categories = () => {
  const { data, isFetching } = useAllCategoriesQuery();
  let i = 1;
  return isFetching
    ? "loading..."
    : data?.categories.length > 0 && (
        <Swiper
          modules={[Virtual]}
          spaceBetween={20}
          slidesPerView={3}
          virtual
          className="w-full h-[150px] mb-10"
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1080: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 6,
            },
          }}
        >
          {data.categories.map((category, index) => {
            if (i >= 5) {
              i = 1;
            } else {
              i++;
            }
            return (
              <SwiperSlide
                className="w-full overflow-hidden  rounded-lg relative"
                key={index}
                virtualIndex={index}
              >
                <div className="w-full h-[150px] rounded-lg overflow-hidden">
                  <img
                    src={`./images/slider/${i}.jpg`}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>
                <div className="absolute inset-0 w-full h-full bg-black/50 flex items-center justify-center p-4">
                  <Link
                    to="/"
                    className="text-white text-base font-medium capitalize"
                  >
                    {category.name}
                  </Link>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      );
  return <div>Categories</div>;
};

export default Categories;
