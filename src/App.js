import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Utility from './components/Utility';
import Roadmap from './components/Roadmap';
import Ecosystem from './components/Ecosystem';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div className="bg-[url('./assets/images/png/redbgheader.png')] lg:bg-FullSize bg-cover bg-right pt-[20px]">
        <NavBar />
        <Header />
      </div>
      <About />
      <div className="bg-[url('./assets/images/png/bgtoken.png')] lg:bg-FullSize bg-cover bg-left">
        <Tokenomics />
      </div>
      <Utility />
      <div className="bg-[url('./assets/images/png/roadmapbgblue.png')] lg:bg-FullSize bg-cover bg-left">
        <Roadmap />
      </div>
      <Ecosystem />
      <div className="bg-[url('./assets/images/png/bgblueconclusion.png')] relative z-[3] lg:bg-FullSize bg-cover bg-left lg:translate-y-[140px] sm:translate-y-[60px] translate-y-[80px]">
        <Conclusion />
      </div>
      <Footer />
    </div>
  );
}

export default App;
