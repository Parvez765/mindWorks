import React from 'react';
import "./Structure.css"

const Structure = () => {
    return (
        <div className='mb-[10px] serviceBg'>
            {/* <img src="https://i.ibb.co/NTcq3Yc/pyramid-01.png" alt="Mind Works Service Pyramid" className='hidden lg:block lg:w-[250px]'/> */}
            <h1 className='ourServiceText text-center' data-aos="fade-right">Our Services</h1>
            <p className='text-center lg:w-[850px] block mx-auto' data-aos="zoom-in-up">Mindworks is an organization that strives to achieve excellence through
                people transformation. We help companies achieve operational excellence
                through continuous improvement. The Minworks Way is to work with your
                organization to help you achieve lean operations and build a culture of

                continuous improvement. Mindworks’ core philosophy is that in business, there is no one-size-fits-all
                solution. Each problem is different and hence requires a totally customized
                solution. With this core value, Mindworks provides customized solutions to
                help organizations improve productivity and efficiency, reduce defect rate and
                operational costs, and improve the overall profitability of the company.
                Consulting and training solutions are designed to achieve long-term

                sustainability.</p>
            
            <div className='mt-[40px]' data-aos="fade-left">
                <div className='flex justify-center gap-8'>
                    <div className='flex flex-col gap-8 items-center'>
                        <h1 className='textOne text-[40px] textContainer text-[#002060] text-center'>Strategic</h1>
                        <div className='servicePara'>
                            <p>Assess Current State <br />
                                Identify Improvement Opportunities <br />
                                Strategy/Policy Deployment</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8 items-center'>
                        <h1 className='textOne text-[40px] textContainer text-[#002060] text-center'>Tactical</h1>
                        <div className='servicePara'>
                            <p>Assess Current State <br />
                                Identify Improvement Opportunities <br />
                                Strategy/Policy Deployment</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8 items-center'>
                        <h1 className='textOne text-[40px] textContainer text-[#002060] text-center'>Operational</h1>
                        <div className='servicePara'>
                            <p>Shop Floor Kaizen <br />
                                Business Process Kaizen<br />
                                Sustainment<br />
                                SQDE</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Structure;