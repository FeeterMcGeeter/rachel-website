import React from 'react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div className='hero mb-lg'>
            <div className='hero__content'>
                <h1 className='hero__title mb-sm'>Senior Strategic Sales Specialist</h1>
                <p className='hero__subtitle mb-md'>
                    Hi, I'm Rachel.  I'm a Senior Specialist with extensive knowledge in E-Commerce consulting and Freight shipping.
                </p>
                <Link 
                    to='portfolio'
                    spy={true}
                    smooth={true}
                    duration={500}
                    className='hero__button'
                >
                    View My Work
                    
                    <i className='fas fa-arrow-right' />
                </Link>
            </div>
        </div>
    );
};

export default Hero;