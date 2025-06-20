import footerBgD from '../assets/images/bg-footer-top-desktop.svg'
import footerBgM from '../assets/images/bg-footer-top-mobile.svg'
import logo from '../assets/images/logo.svg'
import phoneIcon from '../assets/images/icon-phone.svg'
import emailIcon from '../assets/images/icon-email.svg'

const Footer = () => {

  return (
            <div className="w-full h-full flex flex-col mt-4 relative">
                <div className="w-full h-full">
                    <img src={footerBgM} alt=""  className='w-full md:hidden'/>
                    <img src={footerBgD} alt=""  className='w-full hidden md:flex'/>
                </div>
                <div className="w-full bg-[var(--VeryDarkCyan)] ">
                    <div className="w-full max-w-[1200px] mx-auto p-12 flex justify-between flex-col-reverse md:flex-row text-slate-300 bg-[var(--VeryDarkCyan)]">
                        <div className="md:w-1/2">
                            <div className="">
                                <img src={logo} alt="huddlesLogo" className='logof fill-amber-200 bg-slate-50 p-2 rounded-sm w-38 mb-4' />
                                <p className='mb-8 open-sans-sm max-w-[350px]'>We give you the best experience with user interaction. You can reach out to us using the available details below.</p>
                            </div>
                            <div className="contact open-sans-sm">
                                <div className="flex items-center mb-4">
                                    <img src={phoneIcon} alt="huddlesLogo" className='mr-6 h-4' />
                                    <p className=''>Phone: +1-543-123-4567</p>
                                </div>
                                <div className="flex items-center mb-4">
                                    <img src={emailIcon} alt="huddlesLogo" className='mr-6 h-4' />
                                    <p>example@huddle.com</p>
                                </div>
                            </div>
                            <div className="socials flex"></div>
                        </div>
                        <div className="mb-24 md:w-1/2">
                            <div className="NewsLettter">
                                <h3 className='uppercase open-sans-lg mb-2 text-slate-50 text-xl'>newsletter</h3>
                                <p className='open-sans-sm max-w-[320px] mb-8'>To receive tips on how to grow your community, sign up to our weekly newsletter. We'll never send you spam or pass on your email address</p>
                            </div>
                            <form action="" className='w-full flex flex-col items-end gap-4 md:flex-row'>
                                <input type="email" className='w-full focus:outline-0  flex-1 bg-slate-200 text-gray-800 rounded-md px-4 py-2'/>
                                <button className='w-1/2 md:w-auto capitalize bg-pink-400 px-4 py-2 rounded-md text-slate-200 font-semi-bold cursor-pointer hover:shadow-sm hover:shadow-pink-200'>subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Footer