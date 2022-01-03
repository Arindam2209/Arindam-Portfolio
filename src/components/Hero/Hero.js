import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hello ! <br />
          I am Arindam Goswami
        </SectionTitle>
        <SectionText>
        I am a Full stack devloper and a Machine Learing Enthusiast. Currently pursuing my B.Tech in Information Technology from BPPIMT Kolkata.
        Welcome to my portfolio website.
        </SectionText>
        <Button onClick={() => window.location = 'https://www.linkedin.com/in/arindam-goswami-649413203/'}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;