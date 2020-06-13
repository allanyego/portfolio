import React from "react";
import { Section } from "../components/Section";
import { SkillCards } from "../components/SkillCards";

export const About = () => {
  return (
    <Section title="About me">
      <div className="columns">
        <div className="column col-6">
          <p>A tech hobbyist based in Eldoret, Kenya</p>
          <p>
            My interest in software took root back in high school and I was
            hooked ever since. Over time I have learnt to align my problem
            solving to the computer's perspective as well as be a productive
            team player.
          </p>
          <p>
            I am a passionate person, detail junkie and lover of extreme sports
            (I hardly participate &#x1F913;)
          </p>
        </div>
        <div className="column col-6">
          <SkillCards />
        </div>
      </div>
    </Section>
  );
};
