import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Builder from './components/Builder';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <>
      
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path ="/" element={<Home/>}/>
          <Route exact path ="/about" element={<About/>}/>
          <Route exact path ="/builder" element={<Builder/>}/>
          <Route exact path ="/login" element={<Login/>}/>
          <Route exact path ="/register" element={<Register/>}/>
        </Routes>
        <Footer/>
      </Router>
      
    </>
  );
}

export default App;
