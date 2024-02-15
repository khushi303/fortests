import React from 'react'
import Footerlogo from '../assets/images/png/footerlogo.png'
import { FootFacebook, FootDiscord, FootTelegram } from './Icons'

const Footer = () => {
  return (
    <div className='bg-[#0F2440] relative z-[2] lg:pt-[260px] pt-[120px]'>
      <div data-aos="zoom-in" className='container mx-auto xl:max-w-[1164px] xl:px-3 px-6'>
        <div className='flex items-center justify-center flex-col'>
          <img src={Footerlogo} alt="Footerlogo" className='max-w-[114px] w-full mb-[16px] cursor-pointer' />
          <p className='max-w-[659px] text-[16px] font-normal text-center text-white leading-[152%] opacity-70'>In this tremendous whitepaper, we're introducing TROLLMP, the most fantastic token ever created! Just like nobody builds walls better than me, no body launches tokens like we do! </p>
          <div className='lg:mt-[34px] mt-[20px] flex items-center justify-center gap-[14px] lg:pb-[96px] sm:pb-[54px] pb-[44px]'>
            <a href='https://twitter.com/i/flow/login' className='border-[2.2px] border-solid hover:bg-transparent group transition-all duration-300 ease-linear hover:border-[#DF4741] hover:bg-white border-white bg-[#DF4741] w-[50px] h-[50px] rounded-[50%] flex items-center justify-center'>
              <FootFacebook />
            </a>
            <a href='https://discord.com/' className='border-[2.2px] border-solid hover:bg-transparent group transition-all duration-300 ease-linear hover:border-[#DF4741] hover:bg-white border-white bg-[#DF4741] w-[50px] h-[50px] rounded-[50%] flex items-center justify-center'>
              <FootDiscord />
            </a>
            <a href='https://web.telegram.org/' className='border-[2.2px] border-solid hover:bg-transparent group transition-all duration-300 ease-linear hover:border-[#DF4741] hover:bg-white border-white bg-[#DF4741] w-[50px] h-[50px] rounded-[50%] flex items-center justify-center'>
              <FootTelegram />
            </a>
          </div>
        </div>
      </div>
      <div className='border-t border-solid border-white py-[20px]'>
        <p className='text-[16px] font-normal text-white cursor-pointer opacity-70 text-center leading-[151%]'>copyright@2024 all right reserved</p>
      </div>
    </div>
  )
}

export default Footer