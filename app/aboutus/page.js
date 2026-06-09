import React from 'react';
import Navbar from '@/components/Navbar';
import WhoWeAre from './components/WhoWeAre';
import OurStory from './components/OurStory';
import OurOfferings from './components/OurOfferings';
import OurPartners from './components/OurPartners';
import Footer from '@/components/Footer';
import { CollabsSection } from '@/components/CollabSection';

export const metadata = {
    title: 'About Us | House Banao - Construction & Interior Design Experts',
    description:
        "Get to know House Banao - Gurgaon's trusted construction & interior design company. Learn about our story, our offerings, and what makes us different.",
    keywords:
        'House Banao, about us, construction company Gurgaon, interior design company, our story, our offerings',
    authors: [{ name: 'House Banao' }],
    openGraph: {
        title: 'About Us | House Banao - Construction & Interior Design Experts',
        description:
            "Get to know House Banao - Gurgaon's trusted construction & interior design company.",
        type: 'website',
        url: 'https://www.housebanao.com/aboutus',
    },
    alternates: {
        canonical: 'https://www.housebanao.com/aboutus',
    },
};

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
