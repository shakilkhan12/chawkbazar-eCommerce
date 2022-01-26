import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";

const Public = ({children}) => {
  const {adminToken} = useSelector(state => state.authReducer);
  return adminToken ? <Navigate to="/dashboard/products" /> : children;
}
export default Public;