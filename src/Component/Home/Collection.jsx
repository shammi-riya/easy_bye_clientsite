import shos from '../../assets/images/men-shoes.jpg'

const Collection = () => {
    return (
       <div className='grid md:grid-cols-3 gap-6 max-w-7xl mx-auto'>
         <div>
            <div className="relative flex  flex-row justify-between overflow-hidden py-6 sm:py-12">
    <div
        className="group relative cursor-pointer overflow-hidden bg-white px-2 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-slate-500 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto flex justify-between">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-slate-500 transition-all duration-300 group-hover:bg-slate-400">
              
            </span>
            <div
                >
               <img src={shos} alt="" />
            </div>
            <div className="pt-5 text-base font-semibold leading-7 ml-4">
                <p>
                    <a href="#" className="text-slate-500 transition-all duration-300 group-hover:text-white"><h1>Shows</h1>spring-2022
                        &rarr;
                    </a>
                </p>
            </div>
        </div>
    </div>
</div>

        </div>
         <div>
            <div className="relative flex  flex-row justify-between overflow-hidden  py-6 sm:py-12">
    <div
        className="group relative cursor-pointer overflow-hidden bg-white px-2 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-slate-500 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto flex justify-between">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-slate-500 transition-all duration-300 group-hover:bg-slate-400">
              
            </span>
            <div
                >
               <img src={shos} alt="" />
            </div>
            <div className="pt-5 text-base font-semibold leading-7 ml-4">
                <p>
                    <a href="#" className="text-slate-500 transition-all duration-300 group-hover:text-white"><h1>WoMen</h1>spring-2022
                        &rarr;
                    </a>
                </p>
            </div>
        </div>
    </div>
</div>

        </div>
         <div>
            <div className="relative flex  flex-row justify-between overflow-hidden  py-6 sm:py-12">
    <div
        className="group relative cursor-pointer overflow-hidden bg-white px-2 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-slate-500 transition-all duration-300 group-hover:scale-[10]"></span>
        <div className="relative z-10 mx-auto flex justify-between">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-slate-500 transition-all duration-300 group-hover:bg-slate-400">
              
            </span>
            <div
                >
               <img src={shos} alt="" />
            </div>
            <div className="pt-5 text-base font-semibold leading-7 ml-4">
                <p>
                    <a href="#" className="text-slate-500 transition-all duration-300 group-hover:text-white"><h1>Men</h1>spring-2022
                        &rarr;
                    </a>
                </p>
            </div>
        </div>
    </div>
</div>

        </div>
        
       </div>
    );
};

export default Collection;