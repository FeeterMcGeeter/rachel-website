import React from 'react';

const Projects = () => {
    return (
        <div className='projects'>
            <h2 className="heading-2 mb-sm">Projects & Success Stories</h2>
            
            <div className='projects-container mb-md'>
                <div className='card p1 center'>
                    <h2 className='title'>
                        New Hire DSS Collaboration
                    </h2>

                    <p className='subtitle'>
                        Increase number of New Hire cases with early education classes
                    </p>

                    <a
                        className='link'
                        href='https://drive.google.com/file/d/1tlmnX-V2dCaMENTrdKBwCdbkDK1zfmL8/view?usp=sharing'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Link to Presentation
                    </a>
                </div>

                <div className='card p2 center'>
                    <h2 className='title'>
                        DSS Education Core
                    </h2>

                    <p className='subtitle'>
                        Creating a CORE library for BSI - basic level training for any level of sales
                    </p>

                    <a
                        className='link'
                        href='https://drive.google.com/file/d/1mrXgdQqMN73eriRYNtqgRckVeL2RFqEN/view?usp=sharing'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Link to Presentation
                    </a>
                </div>

                <div className='card p3 center'>
                    <h2 className='title'>
                        Success Stories
                    </h2>

                    <p className='subtitle'>
                        Customer consultation success stories
                    </p>

                    <a
                        className='link'
                        href='https://drive.google.com/file/d/1I_QeNRRnOtiTL-vr3JL0W272EhZ7Q6Df/view?usp=sharing'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Link to Presentation
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;