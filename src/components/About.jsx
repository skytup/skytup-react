// About.js
import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
 padding: 4rem 2rem;
 @media (max-width: 768px) {
   padding: 2rem 1rem;
 }
`;

const AboutContainer = styled.div`
 max-width: 1200px;
 margin: 0 auto;
`;

const AboutHeading = styled.h2`
 font-size: 2.5rem;
 margin-bottom: 2rem;
 @media (max-width: 768px) {
   font-size: 2rem;
 }
`;

const AboutContent = styled.div`
 display: flex;
 @media (max-width: 768px) {
   flex-direction: column;
 }
`;

const AboutText = styled.div`
 flex: 1;
 margin-right: 2rem;
 @media (max-width: 768px) {
   margin-right: 0;
   margin-bottom: 2rem;
 }
`;

const AboutImage = styled.div`
 flex: 1;
 img {
   max-width: 100%;
   height: auto;
 }
`;

const About = () => {
    return (
        <AboutSection>
            <AboutContainer>
                <AboutHeading>About Us</AboutHeading>
                <AboutContent>
                    <AboutText>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna vitae interdum tristique, ante
                            magna bibendum urna, in vestibulum felis nunc quis felis. Nullam vel risus vel ipsum congue fringilla.
                        </p>
                    </AboutText>
                    <AboutImage>
                        <img src="/about-image.jpg" alt="About" />
                    </AboutImage>
                </AboutContent>
            </AboutContainer>
        </AboutSection>
    );
};

export default About;