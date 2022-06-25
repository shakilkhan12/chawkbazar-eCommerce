import {Link} from "react-router-dom"
import {motion} from "framer-motion"
import Header from "../../../components/home/Header";
import Nav from "../../../components/home/Nav";

const Login = () => {
    return(
        <>
        <Nav />
        <div className="mt-[70px] pb-[80px]">
         <Header>
            sign in
         </Header>
         <div className="flex flex-wrap justify-center">
            <motion.div
            initial={{opacity: 0, x: "-100vw"}}
            animate={{opacity: 1, x: 0}}
            className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 p-6">
                <form className="bg-white rounded-lg -mt-12 border border-gray-200 p-10">
                    <h1 className="heading mb-5">sign in</h1>
                    <div className="mb-4">
                        <label htmlFor="email" className="form-label">email</label>
                        <input type="email" name="email" id="email" className="form-input" placeholder="Email..." />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="form-label">password</label>
                        <input type="password" name="password" id="password" className="form-input" placeholder="Password..." />
                    </div>  
                    <div className="mb-4">
                        <input type="submit" value="sign in" className="btn btn-indigo w-full " />
                    </div>
                    <div>
                        <p>Don't have an account ? <span className="capitalize font-medium text-base text-black"><Link to="/register">register</Link></span></p>
                    </div>
                </form>
            </motion.div>
         </div>
        </div>
        </>
    )
}
export default Login;