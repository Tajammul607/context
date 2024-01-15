
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './Component/Login'
import Profile from './Component/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Let Implement Context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
    
  )
}

export default App