import Navigation from "./Header/Components/Navigation"
import Footer from "./Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserContextProvider } from "./UseContext";

function App() {

  
  return (
    <>
    <UserContextProvider>

    <Navigation/>
    <Footer/>

    </UserContextProvider>
   

    </>
  )
}

export default App