import React from 'react';
import "./ClientsLogo.css"
import clientLogos from "../../data/clientLogo"

const ClientsLogo = () => {
    return (
        <div className='p-10 bg-[#d6d6d6]'>
            <h1 className='text-[35px] lg:text-[50px] text-center font-bold text-[#002060]'>Clients And Associates</h1>
            {/* First Section */}
            <div class="slider">
                <div class="slide-track mt-[50px]">
                    {
                        clientLogos?.map(cl => (
                            <div class="slide">
                                <img src={cl.img} width="250" alt="" />
                            </div>
                        ))
                    }
                </div>

            </div>
            {/* Second Section */}
            <div class="slider second-section">
    <div class="slide-track mt-[50px]">
        {
            clientLogos?.map(cl => (
            <div class="slide">
                <img src={cl.img} width="250" alt="" />
            </div>
            ))
        }
    </div>
</div>

        </div>
    );
};

export default ClientsLogo;