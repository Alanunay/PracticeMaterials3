
import './App.css'
//import MasterPage from './pages/MasterPage'
import { Counter } from './Counter'
import { LoginCard } from './LoginCard'
import { UserDashboard } from './UserDashboard'
import SimpleCounter from './SimpleCounter'
import { Try } from './Try'

function App() {
  return (
    <>
    {/* <MasterPage/> */}
    <Counter/>
    <LoginCard/>
    <UserDashboard/>
    <SimpleCounter/>
    <Try/>
    </>
  )
}

export default App
