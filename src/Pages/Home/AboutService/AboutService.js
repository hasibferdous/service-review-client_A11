import React from 'react';


const AboutService = () => {
    return (
        <div className="my-20 text-center">
            <div className="flex flex-row">
            <div className='relative w-1/2'>
                     <img src= 'https://img.freepik.com/free-vector/chef-character-design_1322-128.jpg?w=740&t=st=1668022109~exp=1668022709~hmac=c80dccb3e8b5ccddf18907a2108a134dcca96c583ff2b1fb1d56bf242f484f22' alt="" className="w-80 h-96 ml-11 rounded-lg shadow-2xl" />
                    <img src='https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?t=st=1668021478~exp=1668022078~hmac=9f15adb80053210f9ad50140a5b5d679718958d5a2abcadff68ee64dc9208c19'  alt="" className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" /> 
                </div>


                <div className='w-1/2 mr-11'>
                    <p className="text-2xl font-bold text-indigo-400">About</p>
                    <h1 className="my-5 text-5xl font-bold">
                        Fresh <br />
                        Healthy &<br />
                        Hygienic Foods</h1>
                    <p className="pb-3">Homemade food is the best way to eat healthy food. Preparing food at home, one can control the cleanness, healthiness, freshness , hygiene of the meal. 
                    Nowadays, many people do not care about preparing and eating food at home because they have not taken the time to understand the benefits of eating and to cook homemade food. </p>
                    <p className="py-6"> When you cook and eat Homemade food , you are assured that the food is hygienic, clean and bacteria less . One can cultivate and maintain a healthy eating habits through homemade food. That's why I am here to serve you the best home made foods. </p>
                    <button className="bg-indigo-400 p-3 rounded">Get More Info</button>
                </div>
 

            </div>
        </div>
    );
};

export default AboutService;