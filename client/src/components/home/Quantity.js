import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Quantity = ({ quantity, inc, dec }) => {
  return (
    <div className="flex last:border-r last:rounded-tr-lg last:rounded-br-lg first:rounded-tl-lg first:rounded-bl-lg overflow-hidden">
      <span
        className="flex border p-4 border-r-0 cursor-pointer hover:bg-indigo-500 hover:text-white transition-all"
        onClick={dec}
      >
        <AiOutlineMinus />
      </span>
      <span className="flex-1 border flex items-center justify-center font-medium border-r-0">
        {quantity}
      </span>
      <span
        className="flex border p-4 border-r-0 cursor-pointer hover:bg-indigo-500 hover:text-white transition-all"
        onClick={inc}
      >
        <AiOutlinePlus />
      </span>
    </div>
  );
};

export default Quantity;
