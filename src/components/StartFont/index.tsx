import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";

import styles from "./styles.module.css";

const AnimFeTurbulence = animated("feTurbulence");
const AnimFeDisplacementMap = animated("feDisplacementMap");

export default () => {
  const [open, toggle] = useState(false);
  const [{ freq, factor, scale, opacity }] = useSpring(
    () => ({
      reverse: open,
      from: { factor: 10, opacity: 0, scale: 0.9, freq: "0.0175, 0.0" },
      to: { factor: 150, opacity: 1, scale: 1, freq: "0.0, 0.0" },
      config: { duration: 3000 },
    }),
    [open]
  );
  console.log(1)
  return (
    <div className={styles.container} onClick={() => toggle(!open)}>
      <animated.svg
        className={styles.svg}
        style={{ scale, opacity }}
        viewBox="0 0 1278 446"
      >
        <defs>
          <filter id="water">
            <AnimFeTurbulence
              type="fractalNoise"
              baseFrequency={freq}
              numOctaves="2"
              result="TURB"
              seed="8"
            />
            <AnimFeDisplacementMap
              xChannelSelector="R"
              yChannelSelector="G"
              in="SourceGraphic"
              in2="TURB"
              result="DISP"
              scale={factor}
            />
          </filter>
        </defs>
        <svg xmlns="http://www.w3.org/2000/svg">
          <text
            x="50%"
            y="50%"
            font-size="130"
            fill="#66ccff"
            font-family="system-ui, sans-serif"
            text-anchor="middle"
            dominant-baseline="middle"
          >
            Hello. Nice to meet you
          </text>
        </svg>
      </animated.svg>
    </div>
  );
};
