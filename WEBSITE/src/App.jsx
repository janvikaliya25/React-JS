import MainRoutes from './Routes/MainRoutes';
import Navbarcode from './Components/Navbarcode';
import Footer from './Components/Footer'
import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>
      <Navbarcode/>
      <MainRoutes />
      <Footer/>
    </>
  );
}

export default App;
