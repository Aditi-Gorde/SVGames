import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './components/Home.js'
import Navbar from './components/Navbar.js'
import { SignUp } from "./pages/signUp";
import { Login } from "./pages/login";
import { useAuthContext } from "./hooks/useAuthContext";
import {AddGame} from "./components/AddGame.js";
import {GameDetail} from "./components/GameDetail.js";
import Footer from './components/Footer.js';
import AllGames from './pages/AllGames.js';
import About from './pages/About.js';

function App() {
  const { user } = useAuthContext();

  const someUser = localStorage.getItem("user");
  return (
    <>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path='/AddGame' element={<AddGame />} />
    <Route path="/GameDetail/:id" element={<GameDetail />} exact />
    <Route path="/login" element={!someUser ? <Login /> : <Navigate to="/" />}/>
    <Route path="/About" element={<About />} />
    <Route path="/AllGames" element={<AllGames />} exact />
  </Routes>
  <Footer />
  </>
  );
}

export default App;
