import React from "react";
import { TransitionGroup, Transition as ReactTransition } from "react-transition-group";

const transitionStyles = {
  entering: {
    opacity: 0,
  },
  entered: {
    transition: "opacity 200ms ease-out",
    opacity: 1,
  },
};

export const Transition = ({ children, location }) => {
  return (
    <TransitionGroup>
      <ReactTransition
        key={location.pathname}
        timeout={{
          enter: 0,
          exit: 0,
        }}
      >
        {(status) => <main style={{ ...transitionStyles[status] }}>{children}</main>}
      </ReactTransition>
    </TransitionGroup>
  );
};
