import {Link} from "react-router-dom"
const AdminNav = () => {
    return(
     <nav className="fixed left-64 top-4 right-0 mx-4">
      <div className="bg-gray-800 w-full flex justify-end p-4">
       <Link to="/" className="py-2 px-4 bg-indigo-600 text-white rounded-md capitalize">logout</Link>
      </div>
     </nav>
    )
}
export default AdminNav;