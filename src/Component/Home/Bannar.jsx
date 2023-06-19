import bannar2 from '../../assets/images/bannar2.jpg'

const Bannar = () => {


    return (
        <div className='relative'>

            <img className='min-h-screen w-full' src={bannar2} alt="" />

            <div className='absolute top-1/2 px-32 text-center space-y-3'>
                <h3 className='text-4xl font-bold'>2023</h3>
                <h3 className='text-5xl uppercase'>Fashion Trends</h3>
                <a href="#_" className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-slate-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white text-xl">Shop Now</span>
                </a>
            </div>
        </div>
    );
};





export default Bannar;