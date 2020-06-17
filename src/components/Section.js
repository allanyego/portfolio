import React from "react";
import SplitText from "react-pose-text";

const charPoses = {
  exit: { y: 20, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: ({ charInWordIndex }) => ({
      type: "spring",
      delay: charInWordIndex * 30,
      stiffness: 500 + charInWordIndex * 150,
      damping: 10 - charInWordIndex * 1
    })
  }
};

export const Section = ({ title, children }) => {
  return (
    <section style={{
        maxHeight: "100%"
    }}>
      <h1>
        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
          {title}
        </SplitText>
      </h1>
      {children}
    </section>
  );
};
