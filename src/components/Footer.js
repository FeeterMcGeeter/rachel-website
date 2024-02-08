import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className='footer'>
            <div className='footer__btn-toTop' onClick={scrollToTop}>
                <i className='fas fa-chevron-up' />
            </div>

            <div className='footer__content'>
                <p className='footer__logo'>
                    rachel<span>DAVIS</span>
                </p>

                <p className='footer__powered-by'>
                    Powered by
                    <span>
                        <i className='fab fa-react' />
                    </span>
                    React
                </p>

                <p className='footer__copyright'>
                    created by
                    <span>Jeffrey Davis</span>
                    &copy; 2020
                </p>
            </div>
        </div>
    );
};

export default Footer;