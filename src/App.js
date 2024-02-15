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
import BackToTop from './assets/images/png/Backarrow.png';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  // ------------Back-to-Top----------//
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // ---------aos------------//
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
        easing: 'ease-in-out',
      }
    );
    Aos.refresh()
  });
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
      <div className='fixed bottom-5 right-5 z-20 cursor-pointer'>
        <div className={`${backToTop ? '' : 'hidden'} border-[2.2px] rounded-[50%] border-solid border-white bg-[#DF4741] sm:w-[50px] sm:h-[50px] w-[40px] h-[40px] cursor-pointer animate-[mover_2500ms_ease-in-out_infinite] flex items-center justify-center`} onClick={() => top()}>
          <img src={BackToTop} alt="Backtotop" className='w-full sm:max-w-[20px] max-w-[15px]' />
        </div>
      </div>
    </div>
  );
}

export default App;
