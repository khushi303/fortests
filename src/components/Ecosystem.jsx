import React from 'react';
import Card1 from '../assets/images/webp/ecocard1.webp'
import Card2 from '../assets/images/webp/ecocardimg2.webp'
import Card3 from '../assets/images/webp/ecocard3.webp'
import Card4 from '../assets/images/webp/ecocard4.webp'

const Ecosystem = () => {
    return (
        <div id='Ecosystem' className='lg:pt-[121px] sm:pt-[54px] pt-[30px] max-sm:mb-[-20px]'>
            <div data-aos="zoom-in" className='container mx-auto xl:max-w-[1164px] xl:px-3 px-6'>
                <h2 data-aos="zoom-in" className='sm:text-[40px] text-[35px] font-normal ff_dela leading-[121%] text-black text-center mb-[16px]'>Ecosystem</h2>
                <p className='text-[16px] font-normal text-center text-black leading-[151%] max-w-[728px] mx-auto opacity-70'>In the TROLLMP ecosystem, everyone's a winner! From our dedicated meme creators to our passionate community members, we're building a platform where everyone can come together to laugh, meme, and vote. And let me tell you, folks,it's going to be tremendous!</p>
                <div className='lg:mt-[70px] mt-[44px] flex justify-between flex-row flex-wrap'>
                    <div data-aos="zoom-in" className='lg:w-[48.5%] w-full'>
                        <div className='border-[4px] border-solid cursor-pointer border-[#0F244029] flex sm:gap-[30px] gap-[10px] shadow-[8px_8px_0px_0px_#0F2440] sm:flex-row flex-col max-sm:items-center bg-white hover:shadow-[8px_8px_0px_0px_#DF4741] transition-all duration-300 ease-linear sm:py-[21px] sm:pl-[33px] sm:pr-[30px] p-[14px] rounded-[20px]'>
                            <div className='sm:max-w-[88px] sm:w-full w-[80px]'>
                                <img src={Card1} alt="Card1" className='w-full h-[170px] object-cover' />
                            </div>
                            <div>
                                <h3 className='text-[20px] font-bold text-black leading-[121%] sm:mb-[8px] mb-[4px]'>Partnerships and Integrations</h3>
                                <p className='lg:max-w-[369px] text-[16px] font-normal leading-[151%] opacity-70 text-black'>TROLLMP will actively pursue partnerships and integrations with other projects and platforms in the meme coin space, expanding its reach andutility within the broader crypto community.</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className='lg:w-[48.5%] w-full lg:mt-0 mt-[40px]'>
                        <div className='border-[4px] border-solid cursor-pointer border-[#0F244029] flex sm:gap-[30px] gap-[10px] shadow-[8px_8px_0px_0px_#0F2440] hover:shadow-[8px_8px_0px_0px_#DF4741] transition-all duration-300 ease-linear sm:flex-row flex-col max-sm:items-center sm:py-[21px] bg-white sm:pl-[33px] sm:pr-[30px] p-[14px] rounded-[20px]'>
                            <div className='max-w-[88px] w-full'>
                                <img src={Card2} alt="Card1" className='w-full h-[170px] object-cover' />
                            </div>
                            <div>
                                <h3 className='text-[20px] font-bold text-black leading-[121%] sm:mb-[8px] mb-[4px]'>Community Development</h3>
                                <p className='lg:max-w-[369px] text-[16px] font-normal leading-[151%] opacity-70 text-black'>Resources will be allocated towards community development initiatives, including educational programs, hackathons, and developer grants, to foster innovation and engagement within the TROLLMP community</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className='lg:w-[48.5%] w-full mt-[40px]'>
                        <div className='border-[4px] border-solid cursor-pointer border-[#0F244029] flex sm:gap-[30px] gap-[10px] shadow-[8px_8px_0px_0px_#0F2440] hover:shadow-[8px_8px_0px_0px_#DF4741] transition-all duration-300 ease-linear sm:py-[21px] sm:flex-row flex-col max-sm:items-center bg-white sm:pl-[33px] sm:pr-[30px] p-[14px] rounded-[20px]'>
                            <div className='max-w-[88px] w-full'>
                                <img src={Card3} alt="Card1" className='w-full h-[170px] object-cover' />
                            </div>
                            <div>
                                <h3 className='text-[20px] font-bold text-black leading-[121%] sm:mb-[8px] mb-[4px]'>Continuous Improvement</h3>
                                <p className='lg:max-w-[369px] text-[16px] font-normal leading-[151%] opacity-70 text-black'>The TROLLMP team is committed to continuous improvement and will allocate resources towards research, development, and optimization of the TROLLMP platform to ensure its long-term success and sustainability</p>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className='lg:w-[48.5%] w-full mt-[40px]'>
                        <div className='border-[4px] border-solid cursor-pointer border-[#0F244029] flex sm:flex-row flex-col max-sm:items-center gap-[10px] shadow-[8px_8px_0px_0px_#0F2440] hover:shadow-[8px_8px_0px_0px_#DF4741] transition-all duration-300 ease-linear  sm:py-[21px] bg-white sm:pl-[8px] sm:pr-[30px] p-[14px] rounded-[20px]'>
                            <div className='max-w-[133px] w-full'>
                                <img src={Card4} alt="Card1" className='w-full h-[170px] object-cover' />
                            </div>
                            <div>
                                <h3 className='text-[20px] font-bold text-black leading-[121%] sm:mb-[8px] mb-[4px]'>Expansion into New Markets</h3>
                                <p className='lg:max-w-[369px] text-[16px] font-normal leading-[151%] opacity-70 text-black'>Funds will be invested in expanding the presence of TROLLMP in new markets and demographics, driving adoption and awareness of the token among meme enthusiasts worldwide.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecosystem