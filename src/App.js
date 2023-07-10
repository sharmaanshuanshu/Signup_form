import './App.css';
import HmNavbar from './components/HmNavbar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MenFashion from './components/MenFashion';
import WomenFashion from './components/WomenFashion';
import KidsFashion from './components/KidsFashion';
import { Link } from 'react-router-dom';
import SignupForm from './Auth/SignupForm';
import SigninForm from './Auth/SigninForm';
import Home from './home/Home';

function App() {
  return (
    <>

      <HmNavbar />
      {/* <Home></Home> */}
      <Routes>
        <Route exact path='/men' element={<MenFashion />} />
        <Route exact path='/women' element={<WomenFashion />} />
        <Route exact path='/kids' element={<KidsFashion />} />
        <Route exact path='/signup' element={<SignupForm />} />
        <Route exact path='/signin' element={<SigninForm />} />
      </Routes>

    </>
  );
}

export default App;
