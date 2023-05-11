import logo from './logo.svg';
import './App.css';
import Land from './components/land/Land';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      {/* <Land/> */}
      <Footer/>
    </>
  );
}

export default App;
