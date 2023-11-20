import './styles/mediaquery.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Service from './components/service/Service';
import Footer from './components/footer/Footer';

function App() {
  return (
 <> 
 <div className="graident-layout">
 <Navbar/>
 <Hero/>
 </div>
<Service/>
<Footer/>
 </>
  );
}

export default App;
