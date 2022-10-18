const ReviewForm = ({ state,toggleReview }) => {
  return state ? (
    <div className="fixed inset-0 w-full h-full bg-black/40 z-[1000] flex items-center justify-center">
      <div className="w-[90%] sm:w-8/12 md:w-6/12 lg:w-4/12">
        <div className="bg-white p-5">
          <h1 className="mb-3 capitalize text-base font-medium text-gray-700">
            add a review
          </h1>
          <form>
            <div className="mb-3">
              <label
                htmlFor="rating"
                className="mb-2 capitalize font-medium text-sm block"
              >
                rating
              </label>
              <select name="rating" id="rating" className="form-input">
                <option value="">Choose a rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <label
              htmlFor="rating"
              className="mb-2 capitalize font-medium text-sm block"
            >
              message
            </label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              className="form-input"
              placeholder="Write a message"
            ></textarea>
            <div className="mt-3 flex justify-between">
              <input
                type="submit"
                value="add reivew"
                className="btn-indigo rounded"
              />
              <button className="px-4 py-2 text-sm font-medium bg-rose-600 capitalize text-white rounded" onClick={() => toggleReview()}>
                close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};
export default ReviewForm;
