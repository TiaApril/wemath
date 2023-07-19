import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import LoginForm from './pages/LoginForm';
import SignInForm from './pages/SignInForm';
import Result from './pages/Result';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}>
          </Route>
          <Route exact path='/aboutus' element={<AboutUs/>}>
          </Route>
          <Route exact path='/loginform' element={<LoginForm/>}>
          </Route>
          <Route exact path='/signinform' element={<SignInForm/>}>
          </Route>
          <Route exact path='/result' element={<Result/>}></Route>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
