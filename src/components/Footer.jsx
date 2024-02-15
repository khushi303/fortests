import React from 'react'
import Footerlogo from '../assets/images/png/footerlogo.png'
import { FootFacebook, FootDiscord, FootTelegram } from './Icons'

const Footer = () => {
  return (
    <div className='bg-[#0F2440] relative z-[2] lg:pt-[260px] pt-[120px]'>
      <div className='container mx-auto xl:max-w-[1164px] xl:px-3 px-6'>
        <div className='flex items-center justify-center flex-col'>
          <img src={Footerlogo} alt="Footerlogo" className='max-w-[114px] w-full mb-[16px] ' />
          <p className='max-w-[659px] text-[16px] font-normal text-center text-white leading-[152%] opacity-70'>In this tremendous whitepaper, we're introducing TROLLMP, the most fantastic token ever created! Just like nobody builds walls better than me, no body launches tokens like we do! </p>
          <div className='lg:mt-[34px] mt-[20px] flex items-center justify-center gap-[14px] lg:pb-[96px] sm:pb-[54px] pb-[44px]'>
            <div className='border-[2.2px] border-solid border-white bg-[#DF4741] w-[50px] h-[50px] rounded-[50%] flex items-center justify-center'>
              <FootFacebook />
            </div>
            <div className='border-[2.2px] border-solid border-white bg-[#DF4741] w-[50px] h-[50px] rounded-[50%] flex items-center justify-center'>
              <FootDiscord />
            </div>
            <div className='border-[2.2px] border-solid border-white bg-[#DF4741] w-[50px] h-[50px] rounded-[50%] flex items-center justify-center'>
              <FootTelegram />
            </div>
          </div>
        </div>
      </div>
      <div className='border-t border-solid border-white py-[20px]'>
        <p className='text-[16px] font-normal text-white opacity-70 text-center leading-[151%]'>copyright@2024 all right reserved</p>
      </div>
    </div>
  )
}

export default Footer