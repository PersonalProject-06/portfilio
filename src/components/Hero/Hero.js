import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello, I'm <br />
        Firas Debich
      </SectionTitle>
      <SectionText>
      Full-Stack JavaScript Developer
         </SectionText>
    
    </LeftSection>
  </Section>
</>
);

export default Hero;