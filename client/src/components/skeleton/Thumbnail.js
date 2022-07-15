import Animate from "./Animate";

const Thumbnail = () => {
  return (
    <div
      className={`w-full h-[150px] rounded-md bg-indigo-50 overflow-hidden relative`}
    >
      <Animate />
    </div>
  );
};

export default Thumbnail;
