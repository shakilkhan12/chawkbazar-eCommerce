import { useSelector, useDispatch } from "react-redux";
import currency from "currency-formatter";
import { BsTrash } from "react-icons/bs";
import { motion } from "framer-motion";
import Nav from "../../components/home/Nav";
import { discount } from "../../utils/discount";
import Quantity from "../../components/home/Quantity";
import { incQuantity, decQuantity } from "../../store/reducers/cartReducer";

const Cart = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const inc = (id) => {
    dispatch(incQuantity(id));
  };
  const dec = (id) => {
    dispatch(decQuantity(id));
  };
  return (
    <>
      <Nav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="my-container mt-28"
      >
        {cart.length > 0 ? (
          <div className="table-container">
            <table className="w-full">
              <thead>
                <tr className="thead-tr">
                  <th className="th">image</th>
                  <th className="th">name</th>
                  <th className="th">price</th>
                  <th className="th">quantities</th>
                  <th className="th">total</th>
                  <th className="th">delete</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => {
                  const total = currency.format(
                    discount(item.price, item.discount) * item.quantity,
                    {
                      code: "USD",
                    }
                  );
                  return (
                    <tr className="even:bg-gray-50" key={item._id}>
                      <td className="td">
                        <img
                          src={`/images/${item.image1}`}
                          alt={item.title}
                          className="w-12 h-12 object-cover rounded-full"
                        />
                      </td>
                      <td className="td font-medium">{item.title}</td>
                      <td className="td font-bold text-gray-900">
                        {currency.format(discount(item.price, item.discount), {
                          code: "USD",
                        })}
                      </td>
                      <td className="td">
                        <Quantity
                          quantity={item.quantity}
                          inc={() => inc(item._id)}
                          dec={() => dec(item._id)}
                          theme="indigo"
                        />
                      </td>
                      <td className="td font-bold ">{total}</td>
                      <td>
                        <span className="cursor-pointer">
                          <BsTrash className="text-rose-600" size={20} />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-indigo-50 border border-indigo-100 p-4 rounded-md text-sm font-medium text-indigo-800">
            Cart is empty!
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Cart;
