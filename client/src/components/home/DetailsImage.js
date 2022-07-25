const DetailsImage = ({ image }) => {
  return (
    <div className="w-full sm:w-6/12 p-1">
      <img
        src={`/images/${image}`}
        alt="image1"
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default DetailsImage;
