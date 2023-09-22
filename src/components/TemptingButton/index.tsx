"use client";

import { animated, useSpring, useSprings } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import * as React from "react";

import { globalStyles } from "./style/global";
import { styled } from "./style/stitches.config";

const BUTTON_SIZE = 56;

const COLORS = ["#669EF2", "#F9DB6D", "#DC602E", "#83BB70"];

export default () => {
  globalStyles();

  const buttonRef = React.useRef<HTMLDivElement>(null!);
  const avatarRefs = React.useRef<HTMLDivElement[]>([]);
  const avatarRefInitialPositions = React.useRef<number[]>([]);
  const containerRef = React.useRef<HTMLDivElement>(null!);

  const isVisible = React.useRef(false);

  const [{ x, y, opacity }, api] = useSpring(
    () => ({
      x: 0,
      y: 0,
      opacity: 0,
    }),
    []
  );

  const [avatarSprings, avatarApi] = useSprings(
    COLORS.length,
    (i) => ({
      y: 0,
    }),
    []
  );

  React.useLayoutEffect(() => {
    if (avatarRefInitialPositions.current.length === 0) {
      const { y: buttonY } = buttonRef.current.getBoundingClientRect();

      avatarRefInitialPositions.current = avatarRefs.current.map(
        (node) => buttonY - node.getBoundingClientRect().y
      );
    }

    avatarApi.start((i) => ({
      y: avatarRefInitialPositions.current[i],
      immediate: true,
    }));
  }, []);

  const getBounds = React.useCallback(() => {
    const { height, width } = containerRef.current.getBoundingClientRect();

    return {
      top: 0,
      left: 0,
      right: window.innerWidth - width,
      bottom: window.innerHeight - height,
    };
  }, []);

  const backgroundTimeoutRef = React.useRef<ReturnType<typeof setTimeout>>();
  const avatarTimeoutRef = React.useRef<ReturnType<typeof setTimeout>>();

  const bindGestures = useGesture(
    {
      onDrag: ({
        down,
        offset: [ox, oy],
        velocity: [vx, vy],
        direction: [dx, dy],
      }) => {
        api.start({
          x: ox,
          y: oy,
          immediate: down,
          onChange: ({ value }) => {
            const bounds = getBounds();
            if (
              !(
                value.x >= bounds.left &&
                value.x <= bounds.right &&
                value.y >= bounds.top &&
                value.y <= bounds.bottom
              )
            ) {
              api.set({
                x:
                  value.x < bounds.left
                    ? bounds.left
                    : value.x > bounds.right
                    ? bounds.right
                    : value.x,
                y:
                  value.y < bounds.top
                    ? bounds.top
                    : value.y > bounds.bottom
                    ? bounds.bottom
                    : value.y,
              });
            }
          },
          config: (key) => {
            return {
              velocity: key === "x" ? vx * dx : vy * dy,
              decay: true,
            };
          },
        });
      },
      onHover: ({ hovering }) => {
        if (hovering) {
          if (backgroundTimeoutRef.current) {
            clearTimeout(backgroundTimeoutRef.current);
          }
          if (avatarTimeoutRef.current) {
            clearTimeout(avatarTimeoutRef.current);
          }

          isVisible.current = true;

          api.start({
            opacity: 1,
          });

          avatarApi.start({
            y: 0,
          });
        } else {
          backgroundTimeoutRef.current = setTimeout(() => {
            api.start({
              opacity: 0,
            });
          }, 1000);

          avatarTimeoutRef.current = setTimeout(() => {
            avatarApi.start((i) => ({
              y: avatarRefInitialPositions.current[i],
              onRest: () => {
                isVisible.current = false;
              },
            }));
          }, 2000);
        }
      },
    },
    {
      drag: {
        from: () => [x.get(), y.get()],
        bounds: getBounds,
        rubberband: true,
      },
    }
  );

  const { onPointerEnter, onPointerLeave, onPointerDown, ...restGestures } =
    bindGestures();

  const handlePointerDown =
    (isBackground: boolean) => (e: React.PointerEvent<HTMLElement>) => {
      if (isBackground && !isVisible.current) {
        return;
      }

      if (onPointerDown) {
        onPointerDown(e);
      }
    };

  return (
    <>
      <BlurredBackground
        ref={containerRef}
        onPointerLeave={onPointerLeave}
        onPointerDown={handlePointerDown(true)}
        {...restGestures}
        style={{
          x,
          y,
          backgroundColor: opacity.to((o) => `rgba(0,0,0,${0.2 * o})`),
        }}
      >
        {avatarSprings.map((springs, index) => (
          <AvatarIcon
            key={COLORS[index]}
            ref={(ref) => (avatarRefs.current[index] = ref!)}
            css={{
              backgroundColor: COLORS[index],
            }}
            style={springs}
          />
        ))}
        <FloatingButton
          ref={buttonRef}
          onPointerEnter={onPointerEnter}
          onPointerDown={handlePointerDown(false)}
          {...restGestures}
          style={{
            boxShadow: opacity.to(
              (o) => `0px 3px 8px 2px rgba(0,0,0,${0.4 * 1 - o})`
            ),
          }}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="#1a1a1a"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path d="M128,24A104,104,0,0,0,36.8,178l-8.5,29.9a16.1,16.1,0,0,0,4,15.8,15.8,15.8,0,0,0,15.7,4l30-8.5A104,104,0,1,0,128,24Zm32,128H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"></path>
            </svg>
          </span>
        </FloatingButton>
      </BlurredBackground>
    </>
  );
};

const BlurredBackground = styled(animated.div, {
  position: "absolute",
  padding: 12,
  borderRadius: 8,
  display: "flex",
  flexDirection: "column",
  gap: 8,
  backdropFilter: "blur(8px)",
  alignItems: "center",
  touchAction: "none",
});

const GrabberButton = styled(animated.button, {
  height: 17,
  borderRadius: 8,
  backgroundColor: "#cccccc33",
  border: "none",
  mx: 8,
  mb: 4,
  width: "calc(100% - 16px)",

  "& > svg": {
    color: "white",
    transform: `rotate(90deg)`,
  },
});

const AvatarIcon = styled(animated.div, {
  width: BUTTON_SIZE,
  height: BUTTON_SIZE,
  borderRadius: "50%",
  mx: 4,
});

const FloatingButton = styled(animated.div, {
  width: BUTTON_SIZE,
  height: BUTTON_SIZE,
  borderRadius: "50%",
  border: "none",
  position: "relative",
  backgroundClip: "content-box",
  zIndex: 0,
  touchAction: "none",

  "&:focus-visible": {
    outlineOffset: 2,
    outline: "#569AFF99 auto 6px",
  },

  "& > span": {
    borderRadius: "inherit",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#fafafa",
  },
});
