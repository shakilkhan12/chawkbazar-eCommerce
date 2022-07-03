import { useSelector } from "react-redux"
import Nav from "../../components/home/Nav"
import Header from "../../components/home/Header"
import AccountList from "../../components/home/AccountList"
const Dashboard = () => {
  const { user } = useSelector( state => state.authReducer );
  return (
    <>
    <Nav />
    <div className="mt-[70px]">
      <Header>
        my account
      </Header>
      <div className="my-container mt-[40px]">
        <div className="flex flex-wrap -mx-6">
          <div className="w-full md:w-4/12 p-6">
            <AccountList />
          </div>
          <div className="w-full md:w-8/12 p-6">
            <h1 className="heading">name</h1>
            <span className="block mt-3 capitalize font-medium text-sm">{user?.name}</span>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Dashboard