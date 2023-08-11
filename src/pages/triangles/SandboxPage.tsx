import { useState } from 'react';
import { ThemeChanger } from '@shared/themes';
import { useSmoothStateSwitcher } from '@shared/helpers';

function SandboxPage() {
  const [count, setCount] = useState(0);
  const delayedState = useSmoothStateSwitcher(count, false);

  return (
    <section>
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

// CHECKED 0.2.1
