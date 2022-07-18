import Animate from "./Animate";

const Thumbnail = ({ height }) => {
  return (
    <div
      className={`w-full rounded-md bg-indigo-50 overflow-hidden relative`}
      style={{ height: height }}
    >
      <Animate />
    </div>
  );
};

export default Thumbnail;
