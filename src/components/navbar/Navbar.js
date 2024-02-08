import React from 'react';
import { Link } from 'react-scroll';
import MenuToggle from './MenuToggle';

const Navbar = props => {
    return (
        <header className='navbar'>
            <nav className='navbar__nav'>
                <p className="navbar__logo">
                    rachel<span>DAVIS</span>
                </p>

                <div className="navbar__spacer" />

                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link
                            to='portfolio'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='navbar__link'
                        >
                            Projects
                        </Link>
                    </li>

                    <li className='navbar__item'>
                        <Link
                            to='about'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='navbar__link'
                        >
                            About
                        </Link>
                    </li>

                    <li className='navbar__item'>
                        <Link
                            to='contact'
                            spy={true}
                            smooth={true}
                            duration={500}
                            className='navbar__link'
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                <div>
                    <MenuToggle click={props.sideDrawerHandler} />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;