import React, { useState, useEffect } from "react";
import posed, { PoseGroup } from "react-pose";

const Thumbnail = posed.div({
  enter: {
    x: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 300 },
    },
  },
  exit: {
    x: 100,
    opacity: 0.05,
    transition: { duration: 150 },
  },
});

const skills = ["java", "js", "python", "go"];

export const SkillCards = () => {
  let [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (current === skills.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(++current);
      }
    }, 2800);

    return () => clearInterval(interval);
  }, [current, skills]);

  return (
    <div
      className="columns"
      style={{
        justifyContent: "center",
        position: "relative",
      }}
    >
      <PoseGroup>
        <Thumbnail
          className="column col-4"
          key={skills[current]}
          style={{
            position: "absolute",
          }}
        >
          <img
            src={`img/${skills[current]}.png`}
            className="img-cover-fit"
            alt=""
          />
        </Thumbnail>
      </PoseGroup>
    </div>
  );
};
