import React from 'react';


function About() {
    return (

        <div className='bg-green-500 bg-gradient-to-tl from-[#05825F] to-[#22C55E] h-screen '>

            <div className='flex  justify-center items-center '>
                {/* Left Section: Image*/}
                <div className='w-1/6 justify-center items-center min-h-screen  '>
                    <img
                        className=' w-[250px] h-[450px] object-cover absolute left-0 '
                        alt='Veggies'
                        src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png'
                    />
                </div>

                {/* Middle Section: Text */}
                <div className='flex flex-col  items-center justify-center min-h-screen  w-4/6 '>
                    <div className='text-5xl flex justify-center items-center  font-bold text-white '>
                        Order food & groceries.<br />
                        Discover best restaurants. <br />MoonBee!
                    </div>
                    <p className='text-lg text-white  ml-24 mt-10 w-2/3 justify-center items-center'>
                        Enjoy the freshest meals made with the finest ingredients. Try our delicious dishes today!
                    </p>

                </div>

                {/* Right Section: Image */}
                <div className='w-1/6 justify-center items-center min-h-screen  '>
                    <img
                        className='w-[250px] h-[450px] object-cover absolute right-0'
                        alt='Sushi'
                        src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png'
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
