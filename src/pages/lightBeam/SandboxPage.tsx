import { useEffect, useRef, useState } from 'react';
import { ExpansionBlock } from '@shared/ui';
import { ThemeChanger } from '@shared/themes';
import { useSmoothStateSwitcher } from '@shared/helpers';
import classNames from 'classnames';
import { transitionStates, useTransitionTracker } from '@shared/animation';
import classes from './sandboxPage.module.scss';

// TODO: clean up
// TODO: also clean up the corresponding scss file
// TODO: add functionality to move the beam in/out
// TODO: add functionality to set errors and loading
function SandboxPage() {
  const animationCounterRef = useRef(0);
  const [count, setCount] = useState(0);
  const delayedState = useSmoothStateSwitcher(count, false);

  const [open, setOpen] = useState(true);
  const [showLine, setShowLine] = useState(true);

  const {
    ref,
    onTransitionEnd,
    transitionState: { name: transitionName },
  } = useTransitionTracker<HTMLDivElement>({
    on: showLine,
    mountAnimation: true,
    timeout: 2000,
    detectLastTransition: true,
  });

  useEffect(() => {
    if (
      transitionName === transitionStates.endInit.name ||
      transitionName === transitionStates.startInit.name
    ) {
      animationCounterRef.current += 1;
    }
  }, [transitionName]);

  useEffect(() => {
    return () => {
      animationCounterRef.current = 0;
    };
  }, []);

  const lineCycleDirection =
    animationCounterRef.current === 0 || animationCounterRef.current % 2
      ? 'in'
      : 'out';

  return (
    <section className={classes.sandboxPage}>
      <header>
        <h2>Sandbox</h2>
      </header>

      <button
        type="button"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        count is {count}
      </button>

      <div>delayed count is: {delayedState}</div>

      <ThemeChanger />

      <button type="button" onClick={() => setOpen(!open)}>
        Open1 {open.toString()}
      </button>

      <div style={{ maxWidth: 300 }}>
        {/**
         * open={open} def: true
         * open={open} mountAnimation def: true
         * open={open} unmountChildren def: true
         * open={open} unmountChildren mountAnimation def: true
         * open={open} def false
         * open={open} mountAnimation def: false
         * open={open} unmountChildren def: false
         * open={open} unmountChildren mountAnimation def: false
         */}
        <ExpansionBlock open={open}>
          <p style={{ border: '1px solid red' }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Voluptatibus corporis, minima sit voluptatum sint corrupti placeat
            atque saepe sequi quia quisquam officiis tempore esse id modi neque
            ex. Vero, non?
          </p>
        </ExpansionBlock>

        <p>Test</p>
      </div>

      <button type="button" onClick={() => setShowLine(!showLine)}>
        showLine {showLine.toString()}
      </button>

      <div className={classes.testContainer}>
        <div>{showLine.toString()}</div>

        <div>
          {transitionName} {lineCycleDirection}
        </div>

        <div
          ref={ref}
          className={classNames(
            classes.testLine,
            classes[transitionName],
            classes[lineCycleDirection]
          )}
          onTransitionEnd={onTransitionEnd}
        />
      </div>
    </section>
  );
}

export default SandboxPage;

// CHECKED 0.2.1
