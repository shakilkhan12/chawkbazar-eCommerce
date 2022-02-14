import {Link} from "react-router-dom"
import ScreenHeader from "../../components/ScreenHeader";
import Wrapper from "./Wrapper"
const Categories = () => {
    return(
       <Wrapper>
           <ScreenHeader>
              <Link to="/dashboard/create-category" className="btn-dark">add categories <i class="bi bi-plus"></i></Link>
           </ScreenHeader>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel molestiae tempora voluptatibus rem neque optio, deserunt, autem, est distinctio assumenda ratione cum esse at. Vero inventore officia perspiciatis quisquam consequatur!
       </Wrapper>
    )
}
export default Categories;