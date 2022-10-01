import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import currency from "currency-formatter";
import Nav from "../../components/home/Nav";
import Header from "../../components/home/Header";
import AccountList from "../../components/home/AccountList";
import Spinner from "../../components/Spinner";
import { useGetOrdersQuery } from "../../store/services/userOrdersService";
import { discount } from "../../utils/discount";
import Pagination from "../../components/Pagination";
const UserOrders = () => {
  let { page } = useParams();
  page = page ? page : 1;
  const { user } = useSelector((state) => state.authReducer);
  const { data, isFetching } = useGetOrdersQuery({ page, userId: user.id });
  return (
    <>
      <Nav />
      <div className="mt-[70px]">
        <Header>my orders</Header>
        <div className="my-container mt-[40px]">
          <div className="flex flex-wrap -mx-6">
            <div className="w-full md:w-4/12 p-6">
              <AccountList />
            </div>
            <div className="w-full md:w-8/12 p-6">
              <h1 className="heading mb-6">orders</h1>
              {!isFetching ? (
                data?.orders?.length > 0 ? (
                  <>
                    <div className="table-container">
                      <table className="w-full">
                        <thead>
                          <tr className="thead-tr">
                            <th className="th">image</th>
                            <th className="th">name</th>
                            <th className="th">color</th>

                            <th className="th">price</th>
                            <th className="th">quantities</th>
                            <th className="th">total</th>
                            <th className="th">details</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data?.orders.map((item) => {
                            const total = currency.format(
                              discount(
                                item.productId.price,
                                item.productId.discount
                              ) * item.quantities,
                              {
                                code: "USD",
                              }
                            );
                            return (
                              <tr className="even:bg-gray-50" key={item._id}>
                                <td className="td">
                                  <img
                                    src={`/images/${item.productId.image1}`}
                                    alt={item.productId.title}
                                    className="w-12 h-12 object-cover rounded-full"
                                  />
                                </td>
                                <td className=" td font-medium">
                                  {item.productId.title}
                                </td>
                                <td className="td">
                                  <span
                                    className="block w-[15px] h-[15px] rounded-full"
                                    style={{ backgroundColor: item.color }}
                                  ></span>
                                </td>

                                <td className="td font-bold text-gray-900">
                                  {currency.format(
                                    discount(
                                      item.productId.price,
                                      item.productId.discount
                                    ),
                                    {
                                      code: "USD",
                                    }
                                  )}
                                </td>
                                <td className="td font-semibold">
                                  {item.quantities}
                                </td>
                                <td className="td font-bold ">{total}</td>
                                <td className="td">
                                  <Link
                                    to={`/user-order-details/${item._id}`}
                                    className="btn btn-indigo"
                                  >
                                    details
                                  </Link>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <Pagination
                      page={parseInt(page)}
                      perPage={data.perPage}
                      count={data.count}
                      path={`orders`}
                      theme="light"
                    />
                  </>
                ) : (
                  "no orders"
                )
              ) : (
                <Spinner />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserOrders;
