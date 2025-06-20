import comIcon from '../assets/images/icon-communities.svg'
import mesIcon from '../assets/images/icon-messages.svg'

const Partner = () => {
  return (
    <div className="w-full max-w-[800px] flex flex-col md:flex-row justify-between mx-auto items-center p-8">
      <div className="">
        <img src={comIcon} alt="logo" className="w-4 md:w-8"/>
        <p className="text-4xl md:text-6xl font-bold py-3 open-sans-lg">1.4k+</p>
        <p className="capitalize text-gray-500 md:text-lg open-sans-sm">communities formed</p>
      </div>
      <div className="mt-14 md:mt-0">
        <img src={mesIcon} alt="logo" className="w-4 md:w-8"/>
        <p className="text-4xl md:text-6xl font-bold py-3 open-sans-lg">2.7m+</p>
        <p className="capitalize text-gray-500 open-sans-sm md:text-lg text-center md:text-start">messages <br className='md:hidden'/> sent</p>
      </div>
    </div>
  )
}

export default Partner