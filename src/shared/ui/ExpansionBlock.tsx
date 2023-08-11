import { PropsWithChildren, useRef } from 'react';
import classNames from 'classnames';
import { transitionStates } from '../animation/domain';
import { useTransitionTracker } from '../animation/useTransitionTracker';
import classes from './expansionBlock.module.scss';

type Props = {
  open: boolean;
  timeout?: number;
  unmountChildren?: boolean;
  mountAnimation?: boolean;
};

function ExpansionBlock({
  open,
  timeout,
  children,
  mountAnimation,
  unmountChildren,
}: PropsWithChildren<Props>) {
  const innerRef = useRef<HTMLDivElement | null>(null);

  const {
    ref,
    onTransitionEnd,
    transitionState: { name: transitionName },
  } = useTransitionTracker<HTMLDivElement>({
    on: open,
    mountAnimation,
    timeout: timeout || 1000,
    detectLastTransition: true,
  });

  const inLineHeightNeeded =
    transitionName === transitionStates.endInit.name ||
    transitionName === transitionStates.startTransitioning.name;

  return (
    <div
      ref={ref}
      onTransitionEnd={onTransitionEnd}
      className={classNames(classes.expansionBlock, classes[transitionName])}
      style={
        inLineHeightNeeded
          ? {
              height: innerRef.current?.clientHeight || 'auto',
            }
          : undefined
      }
    >
      <div ref={innerRef}>
        {!unmountChildren || transitionName !== transitionStates.start.name
          ? children
          : null}
      </div>
    </div>
  );
}

export { ExpansionBlock };

// CHECKED 0.2.1
