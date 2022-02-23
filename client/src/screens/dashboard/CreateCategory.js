import {Link, useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper"
import { useCreateMutation } from "../../store/services/categoryService";
const CreateCategory = () => {
    const [state, setState] = useState('');
    const [saveCategory, data] = useCreateMutation();
    console.log(data)
    const errors = data?.error?.data?.errors ? data?.error?.data?.errors : [];
    const submitCategory = e => {
       e.preventDefault();
       saveCategory({name: state});
   }
   const navigate = useNavigate();
   useEffect(() => {
       if(data?.isSuccess) {
          navigate('/dashboard/categories');
       }
   }, [data?.isSuccess])
    return(
       <Wrapper>
           <ScreenHeader>
              <Link to="/dashboard/categories" className="btn-dark"><i className="bi bi-arrow-left-short"></i> categories list</Link>
           </ScreenHeader>
           <form className="w-full md:w-8/12" onSubmit={submitCategory}>
               <h3 className="text-lg capitalize mb-3">create category</h3>
               {errors.length > 0 && errors.map((error, key) => (
                   <p className="alert-danger" key={key}>{error.msg}</p>
               ))}
               <div className="mb-3">
                   <input type="text" name="" className="form-control" placeholder="Category Name..." value={state} onChange={(e) => setState(e.target.value)} />
               </div>
               <div className="mb-3">
                   <input type="submit" value={data.isLoading ? 'loading...' : 'create category'} class="btn-indigo" />
               </div>
           </form>
       </Wrapper>
    )
}
export default CreateCategory;