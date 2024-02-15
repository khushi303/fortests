import React from 'react'
import Utilityimg2 from '../assets/images/png/utilityimg2.png'
import Utilityimg1 from '../assets/images/png/utilityimg1.png'

const Utility = () => {
    return (
        <div className='lg:pt-[133px] lg:mb-[149px] md:py-[100px] sm:py-[60px] py-[44px] relative'>
            <div className='container mx-auto xl:max-w-[1164px] xl:px-3 px-6 relative z-10'>
                <h2 className='text-[40px] font-normal text-black ff_dela text-center leading-[100%] mb-[16px]'>UTILITY</h2>
                <p className='text-[16px] font-normal leading-[151%] text-black text-center mx-auto max-w-[728px] opacity-70'>Now, you might be wondering, what can I do with TROLLMP? Well, let me tell you, the possibilities are endless! You can use TROLLMP to vote on your favorite memes, tip your favorite creators, or even trade them on the open market. It's freedom, folks, freedom like you've never seen before!</p>
                <div className='max-w-[717px] mx-auto lg:mt-[70px] sm:mt-[44px] mt-[38px] relative'>
                    <div className='relative'>
                        <div className='lg:pl-[68px] pl-[50px] lg:pb-[43px] pb-[28px] relative'>
                            <p className='text-[18px] font-bold text-black leading-[124%] mb-[8px]'>Voting Rights</p>
                            <p className='text-[16px] font-normal leading-[152%] text-black opacity-70'>Holders of TROLLMP will have the opportunity to participate in governance proposals, enabling them to vote on key decisions related to the development and direction of the TROLLMP ecosystem.</p>
                            <div className='absolute top-0 left-0 z-[2]'>
                                <div className='w-[32px] h-[34px] rounded-[50%] flex items-center justify-center bg-[#DF4741]'>
                                    <div className='w-[12px] h-[12px] rounded-[50%] bg-white'></div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:pl-[68px] pl-[50px] lg:pb-[43px] pb-[28px]  relative'>
                            <p className='text-[18px] font-bold text-black leading-[124%] mb-[8px]'>Meme Creation Rewards</p>
                            <p className='text-[16px] font-normal leading-[152%] text-black opacity-70'>TROLLMP holders will be eligible to receive rewards for creating and sharing high-quality memes within the TROLLMP community, encouraging active participation and engagement.</p>
                            <div className='absolute top-0 left-0 z-[2]'>
                                <div className='w-[32px] h-[34px] rounded-[50%] flex items-center justify-center bg-[#DF4741]'>
                                    <div className='w-[12px] h-[12px] rounded-[50%] bg-white'></div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:pl-[68px] pl-[50px] lg:pb-[43px] pb-[28px]  relative'>
                            <p className='text-[18px] font-bold text-black leading-[124%] mb-[8px]'>Access to Platform Features</p>
                            <p className='text-[16px] font-normal leading-[152%] text-black opacity-70'>TROLLMP will unlock exclusive features and privileges within the TROLLMP platform, such as access to premium content, special events, and enhanced voting capabilities.</p>
                            <div className='absolute top-0 left-0 z-[2]'>
                                <div className='w-[32px] h-[34px] rounded-[50%] flex items-center justify-center bg-[#DF4741]'>
                                    <div className='w-[12px] h-[12px] rounded-[50%] bg-white'></div>
                                </div>
                            </div>
                        </div>
                        <div className='absolute w-[8px] top-0 bottom-0 left-[12px] z-[1] h-full bg-[#DF4741]'></div>
                    </div>
                    <div className='lg:pl-[68px] pl-[50px] relative'>
                        <p className='text-[18px] font-bold text-black leading-[124%] mb-[8px]'>Liquidity Provision</p>
                        <p className='text-[16px] font-normal leading-[152%] text-black opacity-70'>TROLLMP holders can contribute to liquidity pools on decentralized exchanges, facilitating trading and liquidity provision for the TROLLMP token.</p>
                        <div className='absolute top-0 left-0 z-[2]'>
                            <div className='w-[32px] h-[34px] rounded-[50%] flex items-center justify-center bg-[#DF4741]'>
                                <div className='w-[12px] h-[12px] rounded-[50%] bg-white'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute top-[62px] right-0'>
                <img src={Utilityimg2} alt="Utilityimg2" className='max-w-[306px] w-full max-xl:opacity-[0.08]' />
            </div>
            <div className='absolute bottom-[-33px] left-0'>
                <img src={Utilityimg1} alt="Utilityimg1" className='max-w-[306px] w-full max-xl:opacity-[0.08]' />
            </div>
        </div>
    )
}

export default Utility