import logo from '../assets/images/logo.svg'

const Navbar = () => {
  return (
    <div className="w-full h-[100px] p-8">
      <div className="flex justify-between items-center">
        <div className="flex">
          <img src={logo} alt="logo" className='cursor-pointer w-38' />
        </div>
        <div className="cursor-pointer">
          <p className=" border-2 border-pink-600 rounded-full py-2 px-4 hover:text-pink-600 capitalize open-sans-sm">Try it free</p>
        </div>
      </div>
    </div>
  )
}

export default Navbar