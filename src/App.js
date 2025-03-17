import './App.css'
import Header from "./components/Header/Header";
import Accueil from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import { Routes, Route, useParams, Navigate, useLocation } from "react-router-dom";

function App() {

  return (
    <>
      <div>
          <Header></Header>
          <Accueil></Accueil>
          <Footer></Footer>
      </div>
    </>
  )
}

export default App
