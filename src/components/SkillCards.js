import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";

const images = [
  "https://res.cloudinary.com/doltfsoo1/image/upload/v1597948749/skill/javascript_qbxkxu.png",
  "https://res.cloudinary.com/doltfsoo1/image/upload/v1597948750/skill/python_vpmvyr.png",
  "https://res.cloudinary.com/doltfsoo1/image/upload/v1597948750/skill/golang_ul9f3a.png",
  "https://res.cloudinary.com/doltfsoo1/image/upload/v1597948750/skill/java_vl9mjk.png",
];

const RANGE = 150;

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? RANGE : -RANGE,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? RANGE : -RANGE,
      opacity: 0,
    };
  },
};

export const SkillCards = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    const swiperTicker = setTimeout(() => paginate(1), 2500);

    return () => clearInterval(swiperTicker);
  }, [page]);

  return (
    <div className="columns">
      <div className="column col-4 p-centered p-relative">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 200 },
              opacity: { duration: 0.2 },
            }}
            className="p-absolute"
          />
        </AnimatePresence>
      </div>
    </div>
  );
};
