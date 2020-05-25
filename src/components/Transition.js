import React from "react";
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group";

const timeout = 150;
const transitionStyles = {
  entering: {
    position: "absolute",
    transform: 'scale(0.95)',
    opacity: 0,
  },
  entered: {
    transition: `all ${timeout}ms ease-out`,
    transform: 'scale(1)',
    opacity: 1,
  },
  exiting: {
    transition: `all ${timeout}ms ease-out`,
    transform: 'scale(1)',
    opacity: 0,
  },
  exited: {
    transform: 'scale(0.95)',
    opacity: 0,
  }
};

export const Transition = ({ children, location }) => {
  return (
    <TransitionGroup>
      <ReactTransition
        key={location.pathname}
        timeout={{
          enter: timeout,
          exit: timeout,
        }}
      >
        {(status) => <main style={{ ...transitionStyles[status] }}>{children}</main>}
      </ReactTransition>
    </TransitionGroup>
  );
};
