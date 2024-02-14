import React, { useState } from 'react';
import Logo from '../assets/images/png/logoimg.png';

const NavBar = () => {
    const [nav, setNav] = useState(true)
    if (nav === false) {
        document.body.classList.add("max-lg:overflow-hidden")

    } else {
        document.body.classList.remove("max-lg:overflow-hidden")
    }
    return (
        <>
            <div className='container mx-auto xl:max-w-[1274px] xl:px-3 px-6 '>
                <div className={`${nav ? "" : "px-0"} flex items-center transition-all duration-200 ease-linear justify-between sm:py-[23px] py-[16px] lg:px-[55px] px-[35px] bg-white border border-solid border-black rounded-[90px]`}>
                    <a href=""><img src={Logo} alt="Logo" className='max-w-[59px] w-full' /></a>
                    <ul className={`${nav ? "left-[-100%]" : "left-0"} flex max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:z-10 max-lg:transition-all max-lg:duration-300 max-lg:ease-linear max-lg:bg-white max-lg:min-h-screen max-lg:flex-col gap-6 items-center justify-center`}>
                        <li onClick={() => setNav(!nav)}><a href="home" className='text-[16px] font-normal leading-[150%] text-black opacity-60 hover:opacity-100 transition-opacity duration-300 ease-linear'>Home</a></li>
                        <li onClick={() => setNav(!nav)}><a href="Tokenomics" className='text-[16px] font-normal leading-[150%] text-black opacity-60 hover:opacity-100 transition-opacity duration-300 ease-linear'>Tokenomics</a></li>
                        <li onClick={() => setNav(!nav)}><a href="Roadmap" className='text-[16px] font-normal leading-[150%] text-black opacity-60 hover:opacity-100 transition-opacity duration-300 ease-linear'>Roadmap</a></li>
                        <li onClick={() => setNav(!nav)}><a href="Ecosystem" className='text-[16px] font-normal leading-[150%] text-black opacity-60 hover:opacity-100 transition-opacity duration-300 ease-linear'>Ecosystem</a></li>
                        <li onClick={() => setNav(!nav)}><a href="Conclusion" className='text-[16px] font-normal leading-[150%] text-black opacity-60 hover:opacity-100 transition-opacity duration-300 ease-linear'>Conclusion</a></li>
                        <li className='lg:hidden'> <button className={`${nav ? "" : "max-lg:hidden"} bg-white border border-solid border-[#0F2440] py-[12px] px-[24px] flex items-center justify-center text-[16px] leading-[109%] font-bold sm:gap-[10px] gap-[7px] text-black rounded-[107px] shadow-[3px_3px_0px_0px_#0F2440]`}>Contact Us</button></li>
                    </ul>
                    <div className='flex items-center gap-[16px]'>
                        <div onClick={() => setNav(!nav)} className='lg:hidden w-[28px] h-[20px] relative z-20 flex justify-between flex-col'>
                            <span className={`${nav ? 'h-[4px] w-full duration-300 rounded-[3px] bg-black ease-linear transition-all' : "transition-all duration-300 bg-black rounded-[3px] ease-linear h-[4px] w-full rotate-[50deg] translate-y-[14px]"}`}></span>
                            <span className={`${nav ? 'h-[4px] w-full bg-black duration-300 rounded-[3px] ease-linear transition-all' : "duration-300 rounded-[3px] bg-black ease-linear transition-all hidden"}`}></span>
                            <span className={`${nav ? 'h-[4px] w-full duration-300 bg-black rounded-[3px] ease-linear transition-all' : "transition-all duration-300 bg-black rounded-[3px] ease-linear h-[4px] w-full rotate-[-50deg] translate-y-[-50%]"}`}></span>
                        </div>
                        <button className='max-lg:hidden bg-white border border-solid border-[#0F2440] py-[12px] px-[24px] flex items-center justify-center text-[16px] hover:shadow-none transition-all duration-300 ease-linear hover:bg-[#0F2440] hover:text-white leading-[109%] font-bold sm:gap-[10px] gap-[7px] text-black rounded-[107px] shadow-[3px_3px_0px_0px_#0F2440]'>Contact Us</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar

// box - shadow: 3px 3px 0px 0px #0F2440;
