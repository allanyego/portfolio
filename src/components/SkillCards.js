import React, { useState, useEffect } from "react";
import posed, { PoseGroup } from "react-pose";

const Card = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
    transition: {
      y: { type: "spring", stiffness: 1000, damping: 15 },
      default: { duration: 300 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 150 }
  }
});

export const SkillCards = () => {
  const skills = ["java", "js", "python", "go"];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (current === skills.length - 1) {
        setCurrent(0);
      } else {
        const next = current + 1;
        setCurrent(next);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [current, skills]);

  return (
    <div
      className="columns"
      style={{
        justifyContent: "center",
        position: "relative"
      }}
    >
      <div
        className="column col-6"
        style={{
          position: "absolute"
        }}
      >
        <PoseGroup>
          <Card key={skills[current]} className="card">
            <img
              src={`img/${skills[current]}.png`}
              className="img-cover-fit"
              alt=""
            />
          </Card>
        </PoseGroup>
      </div>
    </div>
  );
};
