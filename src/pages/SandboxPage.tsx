import { useState } from 'react';
import { useSmoothStateSwitcher } from '@shared/helpers';
import { ThemeChanger, useGetThemeClasses } from '@shared/themes';
import lightBeam from './sandboxPage.theLine.module.scss';

function SandboxPage() {
  const classes = useGetThemeClasses({
    lightBeam,
  });

  const [count, setCount] = useState(0);
  const delayedState = useSmoothStateSwitcher(count, false);

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
    </section>
  );
}

export default SandboxPage;

// CHECKED 0.2.0
