import { useState } from 'react';

function SandboxPage() {
  const [count, setCount] = useState(0);

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
    </section>
  );
}

export default SandboxPage;
