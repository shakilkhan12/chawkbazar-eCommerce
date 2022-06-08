import {useEffect} from "react"
import { Link, useParams } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import toast, { Toaster } from 'react-hot-toast';
import { clearMessage } from "../../store/reducers/globalReducer";
import Wrapper from "./Wrapper"
import { useGetProductsQuery } from "../../store/services/productService";
const Products = () => {
   let {page} = useParams();
   if(!page) {
      page = 1;
   }
   const {data = [], isFetching} = useGetProductsQuery(page);
   console.log(data);
   const {success} = useSelector(state => state.globalReducer);
    const dispatch = useDispatch();
    useEffect(() => {
     if(success) {
       toast.success(success);
     }
     return () => {
        dispatch(clearMessage())
     }
    }, [])
    return(
       <Wrapper>
          <Link to="/dashboard/create-product" className="btn-dark">create product</Link>
          <Toaster position="top-right" />
       </Wrapper>
    )
}
export default Products;