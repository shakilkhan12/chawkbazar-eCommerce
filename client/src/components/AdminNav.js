import {Link} from "react-router-dom"
const AdminNav = ({openSidebar}) => {
    return(
     <nav className="fixed left-0 sm:left-64 top-4 right-0 mx-4">
      <div className="bg-gray-800 w-full flex justify-between sm:justify-end items-center p-4">
      <i class="bi bi-filter-left text-white text-2xl cursor-pointer sm:hidden block" onClick={openSidebar}></i>
       <Link to="/" className="py-2 px-4 bg-indigo-600 text-white rounded-md capitalize">logout</Link>
      </div>
     </nav>
    )
}
export default AdminNav;