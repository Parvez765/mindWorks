import React from 'react';
import "./Structure.css"

const Structure = () => {
    return (
        <div className='serviceBg'>
           
            <div className='container mx-auto'>
                <h1 className='ourServiceText text-center 2xl:text-left lg:mb-[16px] text-[35px] lg:text-[50px] leading-[50px] 2xl:mb-[50px]' data-aos="fade-right">What is Mind Works?</h1>
                <div className='flex flex-col 2xl:flex-row gap-[75px] 2xl:gap-[150px]'>
                    <div>
                        <p className='text-center 2xl:text-left 2xl:w-[600px] px-[80px] 2xl:p-[0px]' data-aos="zoom-in-up">Mindworks is an organization that strives to achieve excellence through
                            people transformation. We help companies achieve operational excellence
                            through continuous improvement. The Minworks Way is to work with your
                            organization to help you achieve lean operations and build a culture of continuous improvement. Mindworks’ core philosophy is that in business, there is no one-size-fits-all
                            solution. Each problem is different and hence requires a totally customized
                            solution. With this core value, Mindworks provides customized solutions to
                            help organizations improve productivity and efficiency, reduce defect rate and
                            operational costs, and improve the overall profitability of the company.
                            Consulting and training solutions are designed to achieve long-term

                            sustainability.</p>
                    </div>
                    <div className='flex flex-col 2xl:-mt-[100px]' data-aos="zoom-in-left">
                        <div className='flex flex-col-reverse items-center 2xl:items-start 2xl:flex-row gap-[5px] lg:gap-[10px]'>
                            <div className='servicePara  w-[250px] lg:w-[350px] mb-[20px]'>
                                <p className='justify-center text-center 2xl:text-right 2xl:justify-end block mx-auto lg:w-[400px]'>Assess Current State <br />
                                    Identify Improvement Opportunities <br />
                                    Strategy/Policy Deployment</p>
                            </div>
                            <h1 className='textOne text-[35px] lg:text-[40px] textContainer text-[#002060] text-center mb-[10px] '>Strategic</h1>
                        </div>
                        <div className='flex flex-col-reverse items-center 2xl:items-start 2xl:flex-row  gap-[5px] lg:gap-[10px]'>
                            <div className='servicePara  w-[250px] lg:w-[350px] mb-[20px]'>
                                <p className='justify-center text-center 2xl:text-right 2xl:justify-end block mx-auto lg:w-[400px]'>Training <br />
                                    Culture of Continuous Improvement <br />
                                    TOP : Takt - Flow - Pull</p>
                            </div>
                            <h1 className='textOne text-[35px] lg:text-[40px] textContainer text-[#002060] text-center mb-[10px] mt-[15px]'>Tactical</h1>
                        </div>
                        <div className='flex flex-col-reverse items-center 2xl:items-start 2xl:flex-row  gap-[5px] lg:gap-[10px]'>
                            <div className='servicePara w-[250px] lg:w-[350px] mb-[20px]'>
                                <p className='justify-center text-center 2xl:text-right 2xl:justify-end lg:w-[400px] block mx-auto'>Shop Floor Kaizen <br />
                                    Business Process Kaizen <br />
                                    Sustainment <br />
                                    SQDE</p>
                            </div>
                            <h1 className='textOne text-[35px] lg:text-[40px] textContainer text-[#002060] text-center mb-[10px] mt-[15px]'>Operational</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Structure;