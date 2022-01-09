const AdminLogin = () => {
    return(
        <div className="bg-black1 h-screen flex justify-center items-center">
            <form className="bg-black2 p-5 w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12 rounded">
             <h3 className="mb-4 text-white capitalize font-semibold text-lg">dashboard login</h3>
             <div className="mb-4">
                 <input type="email" name="" className="w-full bg-black1 p-4 rounded outline-none text-white" placeholder="Enter email..." />
             </div>
             <div className="mb-4">
                 <input type="password" name="" className="w-full bg-black1 p-4 rounded outline-none text-white" placeholder="Enter password..." />
             </div>
             <div className="mb-4">
                 <input type="submit" value="sign in &rarr;" className="bg-indigo-600 w-full p-4 rounded text-white uppercase font-semibold cursor-pointer" />
             </div>
            </form>
        </div>
    )
}
export default AdminLogin;