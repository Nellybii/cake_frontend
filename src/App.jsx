import Navigation from "./Header/Components/Navigation"
import Footer from "./Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContextProvider } from "./UseContext";
import Login from "./Login components/Login";
import Signup from "./Login components/Signup";

function App() {

  
  return (
    <>
    <UserContextProvider>

    <Navigation/>
    <Footer/>
    {/* <Login/>
    <Signup/> */}

    </UserContextProvider>
   

    </>
  )
}

export default App