import {BrowserRouter, Routes, Route} from "react-router-dom";
import AdminLogin from "../screens/auth/AdminLogin"
import Categories from "../screens/dashboard/Categories";
import CreateCategory from "../screens/dashboard/CreateCategory";
import Products from "../screens/dashboard/Products";
import UpdateCategory from "../screens/dashboard/UpdateCategory";
import Private from "./Private.js"
import Public from "./Public";
const Routing = () => {
   return(
       <BrowserRouter>
       <Routes>
           <Route path="auth">
               <Route path="admin-login" element={<Public><AdminLogin /></Public >} />
           </Route>
           <Route path="dashboard">
               <Route path="products" element={<Private><Products /></Private>} />
               <Route path="categories" element={<Private><Categories /></Private>} />
               <Route path="categories/:page" element={<Private><Categories /></Private>} />
               <Route path="create-category" element={<Private><CreateCategory /></Private>} />
               <Route path='update-category/:id' element={<Private><UpdateCategory /></Private>} />
           </Route>
       </Routes>
       </BrowserRouter>
   )
}
export default Routing;