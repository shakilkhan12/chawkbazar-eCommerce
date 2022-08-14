import { useSelector } from "react-redux";
import currency from "currency-formatter";
import { BsTrash } from "react-icons/bs";
import Nav from "../../components/home/Nav";
import { discount } from "../../utils/discount";
import Quantity from "../../components/home/Quantity";

const Cart = () => {
  const { cart } = useSelector((state) => state.cartReducer);
  console.log(cart);
  const inc = () => {};
  const dec = () => {};
  return (
    <>
      <Nav />
      <div className="my-container mt-28">
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
                    <tr className="even:bg-gray-50">
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
                          inc={inc}
                          dec={dec}
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
          "Cart is empty"
        )}
      </div>
    </>
  );
};

export default Cart;
