import React from 'react';
import HomeComponent from '../../Component/HomeComponent/HomeComponent';
import USP from '../../Component/USP/USP';
import Structure from '../../Component/Structure/Structure';
import OurServices from '../../Component/OurServices/OurServices';
import SEED from '../../Component/SEED/SEED';
import Industries from '../../Component/Industries/Industries';
import Testimonials from '../../Component/Testimonials/Testimonials';
import ClientsLogo from '../../Component/ClientsLogo/ClientsLogo';

const HomePage = () => {
    return (
        <div>
            <HomeComponent />
            <USP />
            <Structure />
            <OurServices />
            <Industries/>
            <SEED />
            <Testimonials />
            <ClientsLogo/>
        </div>
    );
};

export default HomePage;