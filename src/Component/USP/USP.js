import React from 'react';
import "./USP.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();


const USP = () => {
    return (
        
        <div className='container mx-auto p-10' data-aos="fade-up">
             
            {/* USP Container */}
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
                {/* USP One */}
                <div>
                    <img className='imgContainer w-[100px] block mx-auto' src="https://i.ibb.co/djvd9F0/group.png" alt="Mind Works USP" />
                    <p className='text-center uspText'>Personal Excellence</p>
                </div>
                {/* USP Two */}
                <div>
                    <img className='imgContainer w-[100px] block mx-auto' src="https://i.ibb.co/frKHjvR/engineering.png" alt="Mind Works USP" />
                    <p className='text-center uspText'>Team Excellence</p>
                </div>
                 {/* USP Three */}
                 <div>
                    <img className='imgContainer w-[100px] block mx-auto' src="https://i.ibb.co/kK5C1RH/operation.png" alt="Mind Works USP" />
                    <p className='text-center uspText'>Process Excellence</p>
                </div>
                 {/* USP Four */}
                 <div>
                    <img className='imgContainer w-[100px] block mx-auto' src="https://i.ibb.co/SNBN5QH/business.png" alt="Mind Works USP" />
                    <p className='text-center uspText'>Operation Excellence</p>
                </div>
                 {/* USP Five */}
                 <div>
                    <img className='imgContainer w-[100px] block mx-auto' src="https://i.ibb.co/4Zvr34X/professional.png" alt="Mind Works USP" />
                    <p className='text-center uspText'>Business Excellence</p>
                </div>
            </div>
        </div>
    );
};

export default USP;