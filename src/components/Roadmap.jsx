import React from 'react'
import { RoadmapArrow, Righttickroad, Roadmaparrow2 } from './Icons';

const Roadmap = () => {
    return (
        <div id='Roadmap' className='lg:pt-[171px] lg:pb-[266px] pb-[135px] pt-[120px]'>
            <h2 className='text-[40px] font-normal ff_dela text-center text-white leading-[122%] lg:mb-[137px] sm:mb-[60px] mb-[44px]'>Roadmap</h2>
            <div className='container mx-auto xl:max-w-[1164px] xl:px-3 px-6 relative'>
                <div className='relative'>
                    <div className='flex flex-row flex-wrap relative justify-between lg:pl-0 md:pl-[260px] sm:pl-[160px] pl-[87px]'>
                        <div data-aos="zoom-in" className='lg:w-[34%] w-full flex lg:justify-end'>
                            <div>
                                <p className='sm:text-[26px] text-[18px] font-normal ff_dela text-white leading-[145%]'>Phase 1</p>
                                <p className='sm:text-[22px] text-[16px] font-normal ff_dela text-white leading-[145%]'>Q1 - Q2 (2024)</p>
                            </div>
                        </div>
                        <div className='lg:relative absolute z-[2] top-0 sm:left-0 left-[-12px]'>
                            <RoadmapArrow />
                        </div>
                        <div data-aos="zoom-in" className='sm:p-[30px] p-[15px] lg:w-[34%] w-full border max-w-[385px] lg:translate-y-[-67px] lg:mt-0 mt-6 border-solid border-[#FFFFFF29] rounded-[10px] bg-[#0F2440] shadow-[8px_8px_0px_0px_#DF4741]'>
                            <h2 className='lg:text-[26px] text-[20px] font-normal text-white leading-[145%] ff_dela'>Launchpad Ignition</h2>
                            <div className='flex items-start gap-[10px] mt-[15px]'>
                                <Righttickroad />
                                <p className='sm:text-[20px] text-[16] text-white font-normal leading-[120%]'>Create TROLLMP on Ethereum.</p>
                            </div>
                            <div className='mt-[12px] flex items-start gap-[10px]'>
                                <Righttickroad />
                                <p className='sm:text-[20px] text-[16] text-white font-normal leading-[120%]'>Build a strong community.</p>
                            </div>
                            <div className='mt-[12px] flex items-start gap-[10px]'>
                                <Righttickroad />
                                <p className='sm:text-[20px] text-[16] text-white font-normal leading-[120%]'>Conduct a Spacedrop event.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:flex-row flex-col-reverse flex-wrap relative justify-between lg:mt-[80px] mt-[54px] lg:pl-0 md:pl-[260px] sm:pl-[160px] pl-[87px]'>
                        <div data-aos="zoom-in" className='sm:p-[30px] p-[15px]  lg:w-[34%] w-full border lg:translate-y-[-67px] max-w-[382px] lg:mt-0 mt-6  border-solid border-[#FFFFFF29] rounded-[10px] bg-[#0F2440] shadow-[8px_8px_0px_0px_#DF4741]'>
                            <h2 className='lg:text-[26px]  text-[20px] font-normal text-white leading-[145%] ff_dela'>Lunar Liftoff</h2>
                            <div className='flex items-start gap-[10px] mt-[15px]'>
                                <Righttickroad />
                                <p className='sm:text-[20px] text-[16] text-white font-normal leading-[120%]'>List on exchanges.</p>
                            </div>
                            <div className='mt-[12px] flex items-start gap-[10px]'>
                                <Righttickroad />
                                <p className='sm:text-[20px] text-[16] text-white font-normal leading-[120%]'>Establish liquidity pools.</p>
                            </div>
                            <div className='mt-[12px] flex items-start gap-[10px]'>
                                <Righttickroad />
                                <p className='sm:text-[20px] text-[16] text-white font-normal leading-[120%]'>Launch a marketing campaign.</p>
                            </div>
                        </div>
                        <div className='relative z-[2] lg:block hidden'>
                            <Roadmaparrow2 />
                        </div>
                        <div className='lg:hidden absolute z-[2] top-0 sm:left-0 left-[-12px]'>
                            <RoadmapArrow />
                        </div>
                        <div data-aos="zoom-in" className='lg:w-[34%] w-full flex justify-start'>
                            <div>
                                <p className='sm:text-[26px] text-[18px] font-normal ff_dela text-white leading-[145%]'>Phase 1</p>
                                <p className='sm:text-[22px] text-[16px] font-normal ff_dela text-white leading-[145%]'>Q1 - Q2 (2024)</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row flex-wrap justify-between relative lg:mt-[80px] mt-[54px] lg:pl-0 md:pl-[260px] sm:pl-[160px] pl-[87px]'>
                        <div data-aos="zoom-in" className='lg:w-[34%] w-full flex lg:justify-end'>
                            <div>
                                <p className='sm:text-[26px] text-[18px] font-normal ff_dela text-white leading-[145%]'>Phase 3</p>
                                <p className='sm:text-[22px] text-[16px] font-normal ff_dela text-white leading-[145%]'>Q1 - Q2  (2025)</p>
                            </div>
                        </div>
                        <div className='lg:relative absolute top-0 sm:left-0 left-[-12px] z-[2]'>
                            <RoadmapArrow />
                        </div>
                        <div data-aos="zoom-in" className='sm:p-[30px] p-[15px]  lg:w-[34%] w-full border lg:translate-y-[-67px] lg:mt-0 mt-6 max-w-[382px] border-solid border-[#FFFFFF29] rounded-[10px] bg-[#0F2440] shadow-[8px_8px_0px_0px_#DF4741]'>
                            <h2 className='lg:text-[26px]  text-[20px] font-normal text-white leading-[145%] ff_dela'>Galactic Expansion</h2>
                            <div className='flex items-start gap-[10px] mt-[15px]'>
                                <Righttickroad />
                                <p className='sm:text-[20px] text-[16] text-white font-normal leading-[120%]'>Form partnerships.</p>
                            </div>
                            <div className='mt-[12px] flex items-start gap-[10px]'>
                                <Righttickroad />
                                <p className='sm:text-[20px] text-[16] text-white font-normal leading-[120%]'>Grow the community..</p>
                            </div>
                            <div className='mt-[12px] flex items-start gap-[10px]'>
                                <Righttickroad />
                                <p className='sm:text-[20px] text-[16] text-white font-normal leading-[120%]'>Enhance platform features.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:flex-row flex-col-reverse relative flex-wrap justify-between lg:mt-[92px] lg:pb-[80px] mt-[54px] pb-[54px] lg:pl-0 md:pl-[260px] sm:pl-[160px] pl-[87px]'>
                        <div data-aos="zoom-in" className='sm:p-[30px] p-[15px]  lg:w-[34%] w-full border lg:translate-y-[-79px] lg:mt-0 mt-6 max-w-[382px] border-solid border-[#FFFFFF29] rounded-[10px] bg-[#0F2440] shadow-[8px_8px_0px_0px_#DF4741]'>
                            <h2 className='lg:text-[26px]  text-[20px] font-normal text-white leading-[145%] ff_dela'>Cosmic Domination</h2>
                            <div className='flex items-start gap-[10px] mt-[15px]'>
                                <Righttickroad />
                                <p className='sm:text-[20px] text-[16] text-white font-normal leading-[120%]'>Explore cross-chainmigration.</p>
                            </div>
                            <div className='mt-[12px] flex items-start gap-[10px]'>
                                <Righttickroad />
                                <p className='sm:text-[20px] text-[16] text-white font-normal leading-[120%]'>Focus on global adoption.</p>
                            </div>
                            <div className='mt-[12px] flex items-start gap-[10px]'>
                                <Righttickroad />
                                <p className='sm:text-[20px] text-[16] text-white font-normal leading-[120%]'>Establish a decentralized governance structure.</p>
                            </div>
                        </div>
                        <div className='lg:relative lg:block hidden top-0 sm:left-0 left-[-12px] z-[2]'>
                            <Roadmaparrow2 />
                        </div>
                        <div className='lg:hidden absolute z-[2] top-0 sm:left-0 left-[-12px]'>
                            <RoadmapArrow />
                        </div>
                        <div data-aos="zoom-in" className='lg:w-[34%] w-full flex justify-start'>
                            <div>
                                <p className='sm:text-[26px] text-[18px] font-normal ff_dela text-white leading-[145%]'> Phase 4</p>
                                <p className='sm:text-[22px] text-[16px] font-normal ff_dela text-white leading-[145%]'>Q3 - Q4 (2025)</p>
                            </div>
                        </div>
                    </div>
                    <div className='md:top-0 top-[11px] absolute md:bottom-[-10px] bottom-[-32px] lg:left-[49.5%] md:left-[98px] sm:left-[54px] left-[27px] w-[6px] bg-white z-[1]'></div>
                </div>
                <div className='flex flex-row flex-wrap justify-between relative lg:pl-0 md:pl-[260px] sm:pl-[160px] pl-[87px]'>
                    <div data-aos="zoom-in" className='lg:w-[34%] w-full flex lg:justify-end '>
                        <div>
                            <p className='sm:text-[26px] text-[18px] font-normal ff_dela text-white leading-[145%]'>Phase 5</p>
                            <p className='sm:text-[22px] text-[16px] font-normal ff_dela text-white leading-[145%]'>2026 and Beyond</p>
                        </div>
                    </div>
                    <div className='lg:relative z-[2] absolute top-0 sm:left-0 left-[-12px]'>
                        <RoadmapArrow />
                    </div>
                    <div data-aos="zoom-in" className='sm:p-[30px] p-[15px] max-w-[382px] lg:w-[34%] w-full border lg:mt-0 mt-6 lg:translate-y-[-115px] border-solid border-[#FFFFFF29] rounded-[10px] bg-[#0F2440] shadow-[8px_8px_0px_0px_#DF4741]'>
                        <h2 className='sm:lg:text-[26px]  text-[20px] font-normal text-white leading-[145%] ff_dela'>Beyond theStars</h2>
                        <div className='flex items-start gap-[10px] mt-[15px]'>
                            <Righttickroad />
                            <p className='sm:text-[20px] text-[16] text-white font-normal leading-[120%]'>Form partnerships.</p>
                        </div>
                        <div className='mt-[12px] flex items-start gap-[10px]'>
                            <Righttickroad />
                            <p className='sm:text-[20px] text-[16] text-white font-normal leading-[120%]'>Drive further innovation.</p>
                        </div>
                        <div className='mt-[12px] flex items-start gap-[10px]'>
                            <Righttickroad />
                            <p className='sm:text-[20px] text-[16] text-white font-normal leading-[120%]'>Host a galactic celebration.</p>
                        </div>
                        <div className='mt-[12px] flex items-start gap-[10px]'>
                            <Righttickroad />
                            <p className='sm:text-[20px] text-[16] text-white font-normal leading-[120%]'>Secure TROLLMP's enduring legacy.</p>
                        </div>
                        <div className='mt-[12px] flex items-start gap-[10px]'>
                            <Righttickroad />
                            <p className='sm:text-[20px] text-[16] text-white font-normal leading-[120%]'>Enhance platform features.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap

// border: 2px solid #FFFFFF29