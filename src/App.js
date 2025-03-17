import './App.css'

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import AuthForm from './pages/AuthForm/AuthForm';
import RegisterForm from './pages/RegisterForm/RegisterForm';

import { Routes, Route, useParams, Navigate, useLocation } from "react-router-dom";

function App() {

  return (
    <>
      <div>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/authForm" element={<AuthForm/>}/>
            <Route path="/registerForm" element={<RegisterForm/>}/>
          </Routes>
          <Footer></Footer>
      </div>
    </>
  )
}

export default App
