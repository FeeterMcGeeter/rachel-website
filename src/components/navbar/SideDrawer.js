import React from 'react';
import { Link } from 'react-scroll';

const SideDrawer = (props) => {
    // Set styling based on side drawer open or closed
    let drawerClasses = 'side-drawer';

    if (props.show) {
        drawerClasses = 'side-drawer open';
    }

    return (
        <nav className={drawerClasses}>
            <button className='side-drawer__close' onClick={props.click}>
                &times;
            </button>

            <div className='side-drawer__links-container'>
                {/* Navigation Links */}
                <ul className='side-drawer__list'>
                    <li className='side-drawer__item'>
                        <Link
                            to='portfolio'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='side-drawer__link'
                            onClick={props.click}
                        >
                            Projects
                        </Link>
                    </li>

                    <li className='side-drawer__item'>
                        <Link
                            to='About'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='side-drawer__link'
                            onClick={props.click}
                        >
                            About
                        </Link>
                    </li>

                    <li className='side-drawer__item'>
                        <Link
                            to='contact'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='side-drawer__link'
                            onClick={props.click}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Social Media Links */}
                <ul className='side-drawer__social-list'>
                    <li className='side-drawer__social-item'>
                        <a
                            href='https://www.facebook.com/rachel.galloway.524'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='side-drawer__social-link'
                            onClick={props.click}
                        >
                            <i className='fab fa-facebook-f' />
                        </a>
                    </li>

                    <li className='side-drawer__social-item'>
                        <a
                            href='https://www.instagram.com/raerae_31/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='side-drawer__social-link'
                            onClick={props.click}
                        >
                            <i className='fab fa-instagram' />
                        </a>
                    </li>

                    <li className='side-drawer__social-item'>
                        <a
                            href='https://www.linkedin.com/in/rachel-davis-34ab4284/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='side-drawer__social-link'
                            onClick={props.click}
                        >
                            <i className='fab fa-linkedin-in' />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default SideDrawer;