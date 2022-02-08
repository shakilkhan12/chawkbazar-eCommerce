import {Link} from "react-router-dom"
const Sidebar = ({side, closeSidebar}) => {
    return(
        <div className={`fixed top-0 ${side} sm:left-0 w-64 h-screen bg-gray-800 z-10 transition-all`}>
            <i class="bi bi-x-lg absolute top-4 right-4 sm:hidden block cursor-pointer text-lg" onClick={closeSidebar}></i>
            <div className="bg-white p-4">
                <img src="/logo.svg" alt="logo" />
            </div>
            <ul className="mt-4">
                <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-gray-600">
                <i class="bi bi-card-list mr-2 inline-block text-lg"></i> <Link to="/dashboard/products" className="text-base capitalize">products</Link>
                </li>
                <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-gray-600">
                <i class="bi bi-bag-check mr-2 inline-block text-lg"></i> <Link to="/dashboard/products" className="text-base capitalize">orders</Link>
                </li>
                <li className="px-4 cursor-pointer transition-all py-3 text-white flex items-center hover:bg-gray-600">
                <i class="bi bi-people-fill mr-2 inline-block text-lg"></i> <Link to="/dashboard/products" className="text-base capitalize">customers</Link>
                </li>
            </ul>
        </div>
    )
}
export default Sidebar;