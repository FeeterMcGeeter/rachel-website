import React from 'react';
import Strategic from './Strategic';
import Projects from './Projects';

const Portfolio = () => {
    return (
        <div className='portfolio mb-lg'>
            <h1 className="heading-1 mb-md">My Work</h1>
            
            <Strategic />
            <Projects />
        </div>
    );
};

export default Portfolio;