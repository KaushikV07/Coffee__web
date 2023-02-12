import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';
import Product from './components/Product';
import Review from './components/Review';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Menu />
      <Product />
      <Review />
      <Contact /> 
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
