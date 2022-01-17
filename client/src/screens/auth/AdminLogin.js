import {useState} from "react"
import {useAuthLoginMutation} from "../../store/services/authService"
const AdminLogin = () => {
    const [state, setState] = useState({
        email: '',
        password: ''
    })
    const handleInputs = e => {
        setState({...state, [e.target.name]: e.target.value })
    }
    const [login, response] = useAuthLoginMutation();
    console.log('my response', response)
    const errors = response?.error?.data?.errors ? response?.error?.data?.errors : [];
    const adminLoginFunction = e => {
        e.preventDefault();
        login(state);
    }
    return(
        <div className="bg-black1 h-screen flex justify-center items-center">
            <form className="bg-black2 p-5 w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12 rounded" onSubmit={adminLoginFunction}>
             <h3 className="mb-4 text-white capitalize font-semibold text-lg">dashboard login</h3>
             {errors.length > 0 && errors.map((error, key) => (
                   <div key={key}>
                       <p className="bg-red-100 text-red-700 p-3 mb-2 rounded-sm text-sm font-medium">{error.msg}</p>
                   </div>
             )) }
             <div className="mb-4 mt-4">
                 <input type="email" name="email" className="w-full bg-black1 p-4 rounded outline-none text-white" onChange={handleInputs} value={state.email} placeholder="Enter email..." />
             </div>
             <div className="mb-4">
                 <input type="password" name="password" className="w-full bg-black1 p-4 rounded outline-none text-white" onChange={handleInputs} value={state.password} placeholder="Enter password..." />
             </div>
             <div className="mb-4">
                 <input type="submit" value={response.isLoading ? 'Loading...' : 'sing in'} className="bg-indigo-600 w-full p-4 rounded text-white uppercase font-semibold cursor-pointer" />
             </div>
            </form>
        </div>
    )
}
export default AdminLogin;