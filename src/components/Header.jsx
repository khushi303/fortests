import React from 'react'
import { Tweeter, Discord, Telegram } from './Icons';
import Headerimg1 from '../assets/images/png/bgheader.png';

const Header = () => {
    return (
        <div className='lg:pt-[118px] xl:pb-[173px] pb-[210px] md:pt-[60px] pt-[44px]'>
            <div className='container mx-auto xl:max-w-[1274px] xl:px-3 px-6 '>
                <div className='flex flex-row flex-wrap justify-center xl:pl-[58px]'>
                    <div className='lg:w-[50%] w-full'>
                        <h2 className='xl:text-[50px] lg:text-[41px] sm:text-[50px] text-[31px] font-normal text-white leading-[135%] lg:text-start text-center ff_dela sm:mb-[16px] mb-[12px]'>Unlock the Magic of <span className='xl:text-[64px] lg:text-[50px] sm:text-[64px] text-[40px]'>TROLLMP</span></h2>
                        <p className='text-[16px] font-normal text-white lg:text-start text-center leading-[151%] lg:mb-[34px] sm:mb-[25px] mb-[16px] opacity-70 lg:max-w-[558px]'>We're introducing TROLLMP, the most fantastic token ever created! Just like nobody builds walls better than me, no body launches tokens like we do.</p>
                        <button className=' bg-white border border-solid border-[#0F2440] py-[12px] px-[24px] flex items-center justify-center text-[16px] leading-[109%] max-lg:mx-auto font-bold sm:gap-[10px] gap-[7px] text-black rounded-[107px] shadow-[3px_3px_0px_0px_#0F2440]'>Get Started</button>
                        <div className='flex gap-[14px] items-center lg:justify-start justify-center lg:mt-[70px] mt-[40px]'>
                            <a href='https://twitter.com/i/flow/login' className='w-[50px] h-[50px] group cursor-pointer border-[2.2px] hover:bg-transparent transition-all duration-300 ease-linear hover:border-[#0F2440] border-solid hover:bg-white border-[#FFE6F9] flex items-center justify-center rounded-[50%] bg-[#0F2440]'>
                                <Tweeter />
                            </a>
                            <a href='https://discord.com/' className='w-[50px] h-[50px] cursor-pointer hover:bg-transparent transition-all duration-300 ease-linear hover:border-[#0F2440] group border-[2.2px] border-solid border-[#FFE6F9] hover:bg-white flex items-center justify-center rounded-[50%] bg-[#0F2440]'>
                                <Discord />
                            </a>
                            <a href='https://web.telegram.org/' className='w-[50px] h-[50px] cursor-pointer hover:bg-transparent transition-all duration-300 ease-linear hover:border-[#0F2440] group border-[2.2px] border-solid border-[#FFE6F9] hover:bg-white flex items-center justify-center rounded-[50%] bg-[#0F2440]'>
                                <Telegram />
                            </a>
                        </div>
                    </div>
                    <div className='lg:w-[50%] md:w-[84%] lg:mt-0 sm:mt-[45px] mt-[30px] sm:w-[90%] w-full flex items-center justify-center relative'>
                        <div className='max-w-[355px] w-full '>
                            <img src={Headerimg1} alt="Headerimg1" className='w-full' />
                        </div>
                        <div className='bg-[#FF6A64] py-[12px] sm:px-[30px] px-[25px] rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] absolute top-[7%] right-0'>
                            <p className='sm:text-[18px] text-[14px] font-normal leading-[161%] text-white sm:max-w-[124px] max-w-[90px]'>Token Type: <span className='text-[20px]'>ERC-20</span></p>
                        </div>
                        <div className='bg-[#FF6A64] py-[12px] sm:px-[30px] px-[25px] rounded-[10px] shadow-[0px_4px_4px_0px_#00000040] absolute bottom-[7%] left-[2%] '>
                            <p className='sm:text-[18px] text-[14px] font-normal leading-[161%] text-white sm:max-w-[124px] max-w-[90px]'>Token Symbol: <span className='text-[20px]'>TRMP</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
// box-shadow: ;
