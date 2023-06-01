import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Builder from './components/Builder/Builder';
import Login from './components/LoginForm/Login';
import Register from './components/LoginForm/Register';
import { useState } from 'react';

function App() {

  const[page,setPage] = useState("home")

  const onLinkClick = (pageValue) =>{
    setPage(pageValue)
  }

  return (
    <>
      <Router>
        <Navbar page={page} onLinkClick={onLinkClick}/>
        <Routes>
          <Route exact path ="/" element={<Home />}/>
          <Route exact path ="/builder" element={<Builder onLinkClick={onLinkClick}/>}/>
          <Route exact path ="/login" element={<Login onLinkClick={onLinkClick}/>}/>
          <Route exact path ="/register" element={<Register onLinkClick={onLinkClick}/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </>
  );
}

export default App;
