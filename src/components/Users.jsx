import userSvg from '../assets/images/illustration-your-users.svg'
import bgMobileTop2 from '../assets/images/bg-section-top-mobile-2.svg'
import bgMobileBottom2 from '../assets/images/bg-section-bottom-mobile-2.svg'
import bgDesktopTop2 from '../assets/images/bg-section-top-desktop-2.svg'
import bgDesktopBottom2 from '../assets/images/bg-section-bottom-desktop-2.svg'

const Users = () => {
  return (
        <div className="w-full  flex flex-col my-4">
            <div className="w-full h-full">
                <img src={bgMobileTop2} alt=""  className='w-full md:hidden'/>
                <img src={bgDesktopTop2} alt=""  className='w-full hidden md:flex'/>
            </div>
            <div className="pop w-full ">
                <div className="w-full max-w-[1200px] mx-auto p-6 flex flex-col  justify-between items-center md:flex-row-reverse">
                        <img src={userSvg} alt="svg" className='w-75 md:w-100 my-10 md:mb-0' />
                    <div className="text-center my-8 md:my-0 md:text-start">
                        <h3 className='capitalize font-bold text-xl md:text-2xl mb-4 open-sans-lg'>your users</h3>
                        <p className='md:max-w-[500px] text-sm md:text-lg text-gray-400 open-sans-sm'>It takes no time ata all to integrate Huddle with your app's authenticatio solutio. This means, once signed into your app, your users can start chatting immediately.</p>
                    </div>
                </div>
            </div>
                    <div className="w-full h-full">
                <img src={bgMobileBottom2} alt=""  className='w-full md:hidden'/>
                <img src={bgDesktopBottom2} alt=""  className='w-full hidden md:flex'/>
            </div>
        </div>
  )
}

export default Users