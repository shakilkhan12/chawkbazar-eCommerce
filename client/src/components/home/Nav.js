import {Link} from "react-router-dom"
import {FiSearch} from "react-icons/fi";
import {BsHandbag} from "react-icons/bs"
const Nav = () => {
    return(
        <nav className="nav">
            <div className="my-container">
                <div className="flex justify-between items-center">
                   <Link to="/">
                    <img src="./logo.svg" className="h-full object-cover" alt="logo" />
                   </Link>
                   <ul className="flex items-center">
                    <li className="nav-li cursor-pointer"><FiSearch size={22} /></li>
                    <li className="nav-li"><Link to="/login" className="nav-link">sign in</Link></li>
                    <li className="nav-li relative">
                        <Link to="/cart">
                         <BsHandbag size={20} />
                         <span className="nav-circle">10</span>
                        </Link>
                    </li>
                   </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav;