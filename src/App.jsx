import Navigation from "./Header/Components/Navigation"
import Footer from "./Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContextProvider } from "./UseContext";
import Signup from "./Login components/Signup";
import { Route, Routes } from "react-router-dom";
import Login from "./Login components/Login";

function App() {

  
  return (
    <>
    <UserContextProvider>

    <Navigation/>
    <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/sign-up" element={<Signup/>} />
          </Routes>
    <Footer/>
    </UserContextProvider>
   

    </>
  )
}

export default App