import heroImg from '../assets/images/screen-mockups.svg'

const Hero = () => {
  return (
    <div className="w-full h-full flex flex-col items-center mt-[100px] p-8">
        <div className="flex flex-col items-center justify-center">
            <h1 className="w-[320px] md:w-full poppins-bold  capitalize text-3xl md:text-4xl xl:text-5xl text-center ">build the community your fans will love</h1>
            <p className="text-gray-400 max-w-[350px] md:max-w-[480px] open-sans-sm text-center my-8">Huddle re-imagines the way we build communities. You have a vice, but so does your audience. Create connections with your users as you engage in genuine discussions.</p>
            <button className="capitalize cursor-pointer text-slate-50 font-semibold bg-pink-400 px-8 py-4 rounded-full border-2 border-transparent transition-all hover:border-[var(--VeryDarkCyan)] open-sans-md">Get started for free</button>
        </div>
        <div className="">
            <img src={heroImg} alt="hero-icon" className='w-[320px] md:w-[800px] mt-[100px]' />
        </div>
    </div>
  )
}

export default Hero