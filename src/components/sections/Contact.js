import React from 'react';

const Contact = () => {
    return (
        <div className='contact mb-lg'>
            <h1 className='heading-1 mb-md'>
                Contact Me
            </h1>

            {/* Social Media & Email */}
            <ul className='contact__list mb-lg'>
                <li className='contact__item'>
                    <a
                        className='contact__link'
                        href='https://www.facebook.com/rachel.galloway.524'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <i className='fab fa-facebook-f' />
                    </a>
                </li>
                <li className='contact__item'>
                    <a
                        className='contact__link'
                        href='https://www.instagram.com/raerae_31/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <i className='fab fa-instagram' />
                    </a>
                </li>
                <li className='contact__item'>
                    <a
                        className='contact__link'
                        href='https://www.linkedin.com/in/rachel-davis-34ab4284/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <i className='fab fa-linkedin-in' />
                    </a>
                </li>
                <li className='contact__item'>
                    <a
                        className='contact__link'
                        href='mailto:davismrach@gmail.com'
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <i className='fas fa-envelope' />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;