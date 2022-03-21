import React, { CSSProperties, ReactNode } from "react";
import { Transition } from "react-transition-group";

type Props = {
  children: ReactNode;
  state: boolean;
  duration?: number;
  styles?: CSSProperties;
  transitionStyles?: State;
};

export type StateParam = {
  opacity: number;
  zIndex?: number;
};

type State = Record<string, StateParam>;

const defaultTransitionStyles = {
  entering: { opacity: 1, zIndex: 1 },
  entered: { opacity: 1, zIndex: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0, zIndex: -100 },
};

export function TransitionWrapper({
  children,
  state,
  duration = 300,
  styles,
  transitionStyles = defaultTransitionStyles,
}: Props) {
  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out `,
    opacity: 0,
    zIndex: -1,
  };

  return (
    <Transition in={!state} timeout={duration}>
      {(state: keyof State) => (
        <div
          style={{
            ...styles,
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
}
