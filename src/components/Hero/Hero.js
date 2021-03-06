import React from "react";

import { Section, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

import Typed from "react-typed";
const Hero = (props) => {
  const textLines = [
    ` Hello, I'm <br/> Firas Debich`,
    `Full-Stack <br/> Web / Mobile`,
    `JavaScript <br/> Developer.`,
  ];

  return (
    <>
      <Section row nopadding>
        <LeftSection
          style={{
            alignSelf: "center",
          }}
        >
          <SectionTitle main center>
            <Typed strings={textLines} typeSpeed={40} backSpeed={40} loop />
          </SectionTitle>
        </LeftSection>
      </Section>
    </>
  );
};
export default Hero;
