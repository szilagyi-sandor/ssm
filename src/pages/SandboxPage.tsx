import { useState } from 'react';
import { useGetThemeClasses } from '@shared/themes';
import theLineClasses from './sandboxPage.theLine.module.scss';

function SandboxPage() {
  const classes = useGetThemeClasses({
    theLineClasses,
  });

  const [count, setCount] = useState(0);

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
    </section>
  );
}

export default SandboxPage;
