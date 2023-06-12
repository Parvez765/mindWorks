import React from 'react';
import HomeComponent from '../../Component/HomeComponent/HomeComponent';
import USP from '../../Component/USP/USP';
import Structure from '../../Component/Structure/Structure';

const HomePage = () => {
    return (
        <div>
            <HomeComponent />
            <USP />
            <Structure/>
        </div>
    );
};

export default HomePage;