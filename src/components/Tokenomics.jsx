import React from 'react';
import Circleimg from '../assets/images/png/circleimg.png';
import Arrowimg from '../assets/images/png/fuelarr.png';
import Arrowimgshadow from '../assets/images/png/fuelarrshadow.png';
import Spaceimg from '../assets/images/png/spacearrow.png';
import TomArrowimg from '../assets/images/png/tomarrow.png';
import TomShadowimg from '../assets/images/png/tomshadow.png';
import Poolarrowimg from '../assets/images/png/poolarrow.png';
import Poolimgshadow from '../assets/images/png/poolimgshadow.png';
import Marketarrow from '../assets/images/png/marketarrow.png';
import Marketarrowshadow from '../assets/images/png/marketshadow.png';

const Tokenomics = () => {
    return (
        <div className='xl:pt-[163px] xl:pb-[204px] py-[150px]'>
            <div className='container mx-auto xl:max-w-[1164px] xl:px-3 px-6'>
                <div className='flex flex-row flex-wrap'>
                    <div className='md:pt-[83px] xl:w-[50%] md:pb-[109px] w-full flex xl:justify-start items-center justify-center'>
                        <div className='max-w-[548px] w-full'>
                            <div className='max-w-[325px] w-full mx-auto relative'>
                                <img src={Circleimg} alt="Circleimg" className='w-full mx-auto relative ' />
                                <div className='max-w-[166px] w-full absolute top-[-69px] right-[-103px] md:block hidden'>
                                    <div className='flex justify-end'>
                                        <div className='pb-[9px]'>
                                            <p className='text-[18px] font-normal leading-[133%] text-white max-w-[112px]'>Burned for Rocket Fuel</p>
                                            <p className='text-[24px] leading-[134%] font-bold text-white'>(50%)</p>
                                        </div>
                                    </div>
                                    <div className='max-w-[94px] w-full relative'>
                                        <img src={Arrowimg} alt="Arrowimg" className='w-full' />
                                        <img src={Arrowimgshadow} alt="Arrowimgshadow" className='absolute mix-blend-multiply w-[76px] bottom-[-3px] left-[2px]' />
                                    </div>
                                </div>
                                <div className='max-w-[124px] w-full absolute top-[-89px] right-[121px] md:block hidden'>
                                    <div className='flex justify-end'>
                                        <div className='pb-[5px]'>
                                            <p className='text-[18px] font-normal leading-[137%] text-white max-w-[112px]'>Spacedrop</p>
                                            <p className='text-[24px] leading-[135%] font-bold text-white'>(15%)</p>
                                        </div>
                                    </div>
                                    <img src={Spaceimg} alt="Spaceimg" className='max-w-[55px] h-[90px] ml-6' />
                                </div>
                                <div className='max-w-[175px] w-full absolute top-[-44px] left-[-112px] md:block hidden'>
                                    <p className='text-[18px] font-normal text-white leading-[134%] max-w-[141px] relative z-10'>Seeding the Dreams of </p>
                                    <div className='flex items-end gap-2 relative z-10'>
                                        <p className='text-[18px] font-normal text-white leading-[134%]'>Tomorrow </p>
                                        <p className='text-[24px] font-bold text-white leading-[134%]'>(5%)</p>
                                    </div>
                                    <div className='mt-[4px] relative flex justify-end'>
                                        <img src={TomArrowimg} alt="TomArrowimg" className='max-w-[94px] w-full relative' />
                                        <img src={TomShadowimg} alt="TomShadowimg" className='mix-blend-multiply max-w-[100px] w-full absolute bottom-[2px] right-[6px]' />
                                    </div>
                                </div>
                                <div className='max-w-[208px] w-full absolute md:flex items-end bottom-[-5px] left-[-111px] hidden'>
                                    <div className='mb-[23px] max-w-[129px] w-full'>
                                        <p className='text-[18px] font-normal text-white whitespace-nowrap leading-[134%]'>Initial Liquidity</p>
                                        <p className='text-[18px] font-normal text-white whitespace-nowrap leading-[134%] pt-[2px]'>Pools <span className='text-[24px] font-bold leading-[134%]'>(25%)</span></p>
                                    </div>
                                    <div className='max-w-[94px] w-full pb-[13px] relative'>
                                        <img src={Poolarrowimg} alt="Poolarrowimg" className='w-full' />
                                        <img src={Poolimgshadow} alt="Poolimgshadow" className='mix-blend-multiply max-w-[94px] w-full absolute bottom-0 left-[-4.5px]' />
                                    </div>
                                </div>
                                <div className='max-w-[222px] w-full absolute bottom-[-106px] right-[-86px] md:block hidden'>
                                    <div className='max-w-[94px] w-full pb-[12px] relative'>
                                        <img src={Marketarrow} alt="Marketarrow" className='w-full' />
                                        <img src={Marketarrowshadow} alt="Marketarrowshadow" className='mix-blend-multiply w-full max-w-[94px] absolute bottom-0 left-0' />
                                    </div>
                                    <div className='flex justify-end'>
                                        <div className='max-w-[167px] w-full'>
                                            <p className='text-[18px] font-normal text-white leading-[131%]'>PR, Marketing, and Celestial Exchange</p>
                                            <p className='text-[18px] font-normal text-white leading-[132%] pt-[2px]'>Listings <span className='text-[24px] font-bold leading-[132%]'> (5%)</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='md:hidden sm:mt-[50px] mt-[40px]'>
                                <div className='flex items-center justify-start gap-3'>
                                    <div>
                                        <div className='w-[35px] h-[35px] bg-[#DF4741] border-[0.93px] border-solid border-[#FFFFFF80] rounded-md shadow-[2px_3px_0px_0px_#00000040]'>
                                        </div>
                                    </div>
                                    <div className='flex gap-1 items-center flex-row flex-wrap'>
                                        <p className='text-[18px] font-normal leading-[133%] text-white '>Burned for Rocket Fuel </p>
                                        <p className='text-[24px] leading-[134%] font-bold text-white'> (50%)</p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-start gap-3 mt-3'>
                                    <div>
                                        <div className='w-[35px] h-[35px] bg-[#EA1200] border-[0.93px] border-solid border-[#FFFFFF80] rounded-md shadow-[2px_3px_0px_0px_#00000040]'>
                                        </div>
                                    </div>
                                    <div className='flex items-center flex-row flex-wrap gap-1 '>
                                        <p className='text-[18px] font-normal leading-[137%] text-white max-w-[112px]'>Spacedrop</p>
                                        <p className='text-[24px] leading-[135%] font-bold text-white'>(15%)</p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-start gap-3 mt-3'>
                                    <div>
                                        <div className='w-[35px] h-[35px] bg-[#FF2A2A] border-[0.93px] border-solid border-[#FFFFFF80] rounded-md shadow-[2px_3px_0px_0px_#00000040]'>
                                        </div>
                                    </div>
                                    <div className='flex items-center flex-row flex-wrap gap-1 '>
                                        <p className='text-[18px] font-normal text-white leading-[134%] relative z-10'>Seeding the Dreams of Tomorrow <span className='text-[24px] font-bold'>(5%)</span></p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-start gap-3 mt-3'>
                                    <div>
                                        <div className='w-[35px] h-[35px] bg-[#C70000] border-[0.93px] border-solid border-[#FFFFFF80] rounded-md shadow-[2px_3px_0px_0px_#00000040]'>
                                        </div>
                                    </div>
                                    <div className='flex items-center flex-row flex-wrap gap-1 '>
                                        <p className='text-[18px] font-normal text-white leading-[134%] relative z-10'>Initial Liquidity Pools<span className='text-[24px] font-bold'>(25%)</span></p>
                                    </div>
                                </div>
                                <div className='flex items-center justify-start gap-3 mt-3'>
                                    <div>
                                        <div className='w-[35px] h-[35px] bg-[#FF8379] border-[0.93px] border-solid border-[#FFFFFF80] rounded-md shadow-[2px_3px_0px_0px_#00000040]'>
                                        </div>
                                    </div>
                                    <div className='flex items-center flex-row flex-wrap gap-1 '>
                                        <p className='text-[18px] font-normal text-white leading-[134%] relative z-10'>PR, Marketing, and Celestial Exchange<span className='text-[24px] font-bold'>(5%)</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='xl:w-[50%] w-full flex items-center xl:justify-end justify-center xl:mt-0 mt-[50px]'>
                        <div className='max-w-[501px] bg-[#DF4741] w-full p-[20px] border border-solid border-[#FFFFFF80] rounded-[20px] shadow-[0px_5px_18px_0px_#00000061]'>
                            <h3 className=' ff_dela sm:text-[40px] text-[30px] font-normal text-white leading-[100%] mb-[16px]'>Tokenomics</h3>
                            <div>
                                <div className='flex gap-1 items-center'>
                                    <p className='sm:max-w-[134px] max-w-[100px] w-full text-[16px] sm:text-[16px] font-normal leading-[153%] text-white'>Token Name:</p>
                                    <p className='sm:text-[18px] text-[16px] font-bold leading-[150%] text-white'>TROLLMP</p>
                                </div>
                                <div className='flex gap-1 sm:items-center items-start'>
                                    <p className='sm:max-w-[134px] max-w-[100px] w-full text-[16px] sm:text-[16px] font-normal leading-[153%] text-white'>Token Symbol:</p>
                                    <p className='sm:text-[18px] text-[16px] font-bold leading-[150%] text-white'>TRMP</p>
                                </div>
                                <div className='flex gap-1 items-start'>
                                    <p className='sm:max-w-[134px] max-w-[100px] w-full text-[16px] sm:text-[16px] font-normal leading-[153%] text-white'>Total Supply:</p>
                                    <p className='text-[16px] font-normal leading-[150%] text-white'>Infinite jest supply, but let's keep it real – <span className='sm:text-[18px] text-[16px] font-bold'>142.53 Billion</span> </p>
                                </div>
                                <div className='flex gap-1 items-start'>
                                    <p className='sm:max-w-[134px] max-w-[100px] w-full text-[16px] sm:text-[16px] font-normal leading-[153%] text-white'>TRMP Token Type:</p>
                                    <p className='sm:text-[18px] text-[16px] font-bold leading-[150%] text-white'>ERC-20</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tokenomics;
// border: 0.93px solid #FFFFFF80
