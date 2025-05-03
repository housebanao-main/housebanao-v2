import React from 'react';
import Navbar from '@/components/Navbar';
import WhoWeAre from './components/WhoWeAre';
import OurStory from './components/OurStory';
import OurOfferings from './components/OurOfferings';
import OurPartners from './components/OurPartners';
import Footer from '@/components/Footer';
import { CollabsSection } from '@/components/CollabSection';

const AboutUs = () => {
    return (
        <div className='relative'>
            <Navbar isWhite={true}/>
            <div className='pt-16 flex bg-white'>
                <WhoWeAre />
            </div>
            {/* <div className='my-8'> */}
                <OurStory />
            {/* </div> */}
            {/* <div className='my-8'> */}
                <OurOfferings />
            {/* </div> */}
            {/* <div className='my-8'>
                <OurPartners />

            </div> */}
            <CollabsSection/>
            <Footer />
        </div>
    );
};

export default AboutUs;
