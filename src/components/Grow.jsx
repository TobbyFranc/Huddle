import growSvg from '../assets/images/illustration-grow-together.svg'
import bgMobileTop1 from '../assets/images/bg-section-top-mobile-1.svg'
import bgMobileBottom1 from '../assets/images/bg-section-bottom-mobile-1.svg'
import bgDesktopTop1 from '../assets/images/bg-section-top-desktop-1.svg'
import bgDesktopBottom1 from '../assets/images/bg-section-bottom-desktop-1.svg'

const Grow = () => {
  return (
    <div className="w-full  flex flex-col my-4">
        <div className="w-full h-full">
            <img src={bgMobileTop1} alt=""  className='w-full md:hidden'/>
            <img src={bgDesktopTop1} alt=""  className='w-full hidden md:flex'/>
        </div>
        <div className="pop w-full ">
            <div className="w-full max-w-[1200px] mx-auto p-6 flex flex-col  justify-between items-center md:flex-row-reverse">
                    <img src={growSvg} alt="svg" className='w-75 md:w-100 my-10 md:mb-0' />
                <div className="text-center my-8 md:my-0 md:text-start">
                    <h3 className='capitalize font-bold text-xl md:text-2xl mb-4 open-sans-lg'>grow together</h3>
                    <p className='md:max-w-[500px] text-sm md:text-lg text-gray-400 open-sans-sm'>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
                </div>
            </div>
        </div>
                <div className="w-full h-full">
            <img src={bgMobileBottom1} alt=""  className='w-full md:hidden'/>
            <img src={bgDesktopBottom1} alt=""  className='w-full hidden md:flex'/>
        </div>
    </div>
  )
}

export default Grow