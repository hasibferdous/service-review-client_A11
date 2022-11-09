import React from 'react';

const OrderNow = () => {
    return (
        <div className='bg-indigo-100 p-11'>
             <div className="sm:mx-auto sm:container px-6 xl:px-0">
            <div className="flex items-center justify-between md:flex-row flex-col py-12 space-y-6 md:space-y-0 w-full">
                <div className="hidden md:block">
                    <img className="hidden xl:block w-full" src="https://img.freepik.com/free-vector/website-template-with-healthy-organic-food-design_83728-3293.jpg?t=st=1667977471~exp=1667978071~hmac=5d55b49f29ae204f0af0dfd4ceb267e729636b35dc7811a31322a8ff67c85186" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1" />
                    <img className="xl:hidden w-full" src="https://img.freepik.com/free-vector/website-template-with-healthy-organic-food-design_83728-3293.jpg?t=st=1667977471~exp=1667978071~hmac=5d55b49f29ae204f0af0dfd4ceb267e729636b35dc7811a31322a8ff67c85186" />
                </div>
                <div className="flex justify-center items-center flex-col xl:w-2/5 md:px-6 sm:w-3/4 md:w-2/4">
                    <div className="">
                        <h1 className="xl:text-4xl text-3xl font-semibold leading-9 text-gray-800">Grab them now before it’s late!</h1>
                    </div>
                    <div className="mt-4">
                        <p className="xl:text-xl text-base leading-7 text-center text-gray-600">Avail the 25% discount offer right now on fast food.</p>
                    </div>
                    <div className="mt-8 flex justify-center items-center w-full">
                        <button className="hover:opacity-75 flex justify-center bg-gray-800 sm:w-32 w-full h-10 py-3">
                            <p className="text-base font-medium leading-none text-white">Order Now !</p>
                        </button>
                    </div>
                </div>
                <div className="flex md:w-auto w-full justify-center flex-row space-x-4 md:space-x-0">
                    <div className="w-full">
                        <img className="hidden xl:block w-full" src="https://img.freepik.com/free-vector/american-food-banner-design-template_23-2148947451.jpg?w=740&t=st=1668008920~exp=1668009520~hmac=41332b88146e505d462255da123a68e3ec3f8a7437538c8b09762e10f4c640d9" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1" />
                        <img className="xl:hidden w-full" src="https://img.freepik.com/free-vector/american-food-banner-design-template_23-2148947451.jpg?w=740&t=st=1668008920~exp=1668009520~hmac=41332b88146e505d462255da123a68e3ec3f8a7437538c8b09762e10f4c640d9" />
                    </div>
                    <div className="md:hidden w-full">
                        <img className="hidden xl:block w-full" src="https://i.ibb.co/ZcSmVGf/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1.png" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1" />
                        <img className="xl:hidden w-full" src="https://i.ibb.co/mBk8myg/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png" alt="behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};
export default OrderNow;