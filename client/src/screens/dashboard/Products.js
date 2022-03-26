import { Link } from "react-router-dom";
import Wrapper from "./Wrapper"
const Products = () => {
    return(
       <Wrapper>
          <Link to="/dashboard/create-product" className="btn-dark">create product</Link>
          
       </Wrapper>
    )
}
export default Products;