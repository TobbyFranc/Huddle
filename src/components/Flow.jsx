import convoSvg from '../assets/images/illustration-flowing-conversation.svg'

const Flow = () => {
  return (
        <div className="w-full flex flex-col my-12">
            <div className="w-full ">
                <div className="w-full max-w-[1200px] mx-auto p-6 flex flex-col  justify-between items-center md:flex-row">
                        <img src={convoSvg} alt="svg" className='w-75 md:w-100 my-10 md:mb-0' />
                    <div className="text-center my-8 md:my-0 md:text-start">
                        <h3 className='capitalize font-bold text-xl md:text-2xl mb-4 open-sans-lg'>flow conversation</h3>
                        <p className='md:max-w-[500px] text-sm md:text-lg text-gray-400 open-sans-sm'>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a natura flow</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Flow