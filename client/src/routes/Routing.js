import {BrowserRouter, Routes, Route} from "react-router-dom";
import AdminLogin from "../screens/auth/AdminLogin"
import Products from "../screens/dashboard/Products";
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
           </Route>
       </Routes>
       </BrowserRouter>
   )
}
export default Routing;