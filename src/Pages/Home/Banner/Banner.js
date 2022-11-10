import React from 'react';
const Banner = () => {
    return (
        <div>
    <div className="overflow-y-hidden">
      <div className="relative flex justify-center items-center md:justify-start ">
        <img className="hidden lg:block  w-full h-full" src="https://img.freepik.com/free-photo/traditional-ukrainian-russian-borscht-red-soup-bowl-banner-top-view_2829-11971.jpg?w=826&t=st=1668093374~exp=1668093974~hmac=846bd163647cbcf315ee628b55a613c5be73daf83afd8719621eaf7756ab6f20" alt="randeer" />
         <div className="flex absolute justify-start flex-col md:flex-row items-center">
          <div className=" py-32 sm:py-20  md:hidden" />
          <div className="mt-10  lg:w-auto custom sm:mt-96 md:mt-0 h-full flex px-4 md:px-0  z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
            <p className="text-xl sm:text-2xl xl:text-4xl text-center md:text-left font-semibold leading-6 2xl:leading-10 text-gray-100 md:w-96  3xl:w-2/3">Welcome to Hungry Kitchen!</p>
            <p className="mt-4 md:w-80 lg:w-2/3 xl:w-3/4 text-center md:text-left  text-base leading-normal text-gray-200">Best Homemade foods in the town!.<br/>Get discount on any order!</p>
            <button className="mt-6 shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base border-2 border-white transition hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-800 font-medium text-white">
              Explore Now!
            </button>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};
export default Banner;