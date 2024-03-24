import {BrowserRouter, Routes,Route, Navigate} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import "./style/global.scss";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import AboutUs from './pages/AboutUs/AboutUs'
import Gallery from './pages/Gallery/Gallery'
import Contact from './pages/Contact/Contact';
import Shop from './pages/Shop/Shop';
import ShopDetail from '../src/pages/Shop/ShopDetail'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'


function App() {
   const { user } = useAuthContext()

  return (
    <div className="App">
        <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path="/home" element={<HomePage />}/>
            <Route path="/aboutus" element={<AboutUs />}/>
            <Route path="/gallery" element={<Gallery />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/shop" element={<Shop />}/>
            <Route path="/shop/:id/:category" element={<ShopDetail />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />}/>
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />}/>
          </Routes>
        </div>
        <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
