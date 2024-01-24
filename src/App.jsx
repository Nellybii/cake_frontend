<<<<<<< HEAD
import Navigation from "./Header/Components/Navigation"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Navigation/>
    </>
  )
=======
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarComp from "./Components/NavBarComp";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import User from "./Components/User";

function App() {
  return (
    <div>
      <NavBarComp />
      
      <Routes>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
      <User />
    </div>
  );
>>>>>>> main
}

export default App