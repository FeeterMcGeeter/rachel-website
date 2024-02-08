import React from 'react';

const About = () => {
    return (
        <div className='about mb-lg'>
            <h1 className='heading-1 mb-md'>About Me</h1>

            <div className='about__cards-container'>
                <div className='about__card a1'>
                    <h3 className='heading-3 card-title'>This Past Year</h3>

                    <div className='about__card-description'>
                        <p className='about__card-paragraph'>
                            I have learned a lot this past year about who I am
                            as a professional.
                        </p>

                        <p className='about__card-paragraph'>
                            I have come out of my comfort zone to better
                            understand myself on a personal and professional
                            level. I pushed myself to take a personality test to
                            find my strengths and opportunities. From those
                            results, I have actively applied and will continue
                            to use the tools provided when I collaborate with my
                            peers, and work with AEs and their customers.
                        </p>

                        <p className='about__card-paragraph'>
                            As a Senior Specialist, I saw a gap in the knowledge
                            of the new hires when they started to work their
                            territories. I created an outline and had others
                            create the content for a 12-week learning journey
                            for the new hires in Business Sales Inside
                            Organization. This journey not only bridged a gap,
                            it created relationships within the FedEx
                            organization, unified teams, and gave the AE a
                            better understanding on our specialties in Freight,
                            International, automation, and e-commerce. I will
                            continue to share my "outside of the box" ideas to
                            help support the Sales & Support organization,
                            Business & Field organization, and FedEx as a whole.
                        </p>
                    </div>
                </div>

                <div className='about__card a2'>
                    <h3 className='heading-3 card-title'>Expertise</h3>

                    <ul className='about__card-description about__list'>
                        <li className='about__item'>
                            <i className='fas fa-angle-right' />
                            E-Commerce specialist
                        </li>
                        <li className='about__item'>
                            <i className='fas fa-angle-right' />
                            Freight
                        </li>
                        <li className='about__item'>
                            <i className='fas fa-angle-right' />
                            B2B Supply Chain
                        </li>
                        <li className='about__item'>
                            <i className='fas fa-angle-right' />
                            Education Lead
                        </li>
                    </ul>
                </div>

                <div className='about__card a3'>
                    <h3 className='heading-3 card-title'>
                        Awards & Recognition
                    </h3>

                    <ul className='about__card-description about__list'>
                        <li className='about__item'>
                            <i className='fas fa-award' />8 BZ Awards
                        </li>
                        <li className='about__item'>
                            <i className='fas fa-award' />
                            Rising Star Q4 2020
                        </li>
                        <li className='about__item'>
                            <i className='fas fa-award' />
                            Director's Commitment to Excellence Award Q1 FY20
                        </li>
                    </ul>
                </div>

                <div className='about__card a4'>
                    <h3 className='heading-3 card-title'>Myers Briggs Test</h3>

                    <div className='about__card-description'>
                        <p>
                            Like an onion, everyone has layers. I wanted to
                            analyze myself and peel back the layers. I took the
                            Myers Briggs test for two reasons;{' '}
                            <strong>&nbsp;1.</strong> It is important for me to
                            be self-aware of my strengths and opportunities.{' '}
                            <strong>&nbsp;2.</strong> To dig deeper on how
                            others perceive me. When I collaborate with peers,
                            my strengths help the team. Although, they can be
                            perceived as a hindrance. One of my strengths is
                            decisiveness. I speak clearly and put my views
                            across in an objective manner and expect others to
                            do the same. As the lead of the Education team, I
                            believe being strong in my decision making and
                            objectivity will guide the team to success. After I
                            took the
                            <span>
                                <a
                                    href='https://profiles.mbtionline.com/eedba95eb7.html'
                                    rel='noopener noreferrer'
                                    target='_blank'
                                    className='about__link bold'
                                >
                                    &nbsp;assessment&nbsp;
                                </a>
                            </span>
                            , it was clear I could make others uncomfortable to
                            where they would not want to share their ideas. I
                            decided to take a step back and listen. Since taking
                            this approach, I see my peers reach out to me more
                            often and become comfortable to share their ideas. I
                            see growth in myself every day. My next step is to
                            transition from Senior Specialist to Senior
                            Strategic. As a professional consultant, I am one
                            that the FedEx organization can count on for future
                            leadership and guidance. As I transition from Senior
                            Specialist to Senior Strategic, I will continue to
                            evaluate myself and learn through the Myers Briggs
                            program.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;