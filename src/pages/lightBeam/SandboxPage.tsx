import { ThemeChanger } from '@shared/themes';
import classes from './sandboxPage.module.scss';

function SandboxPage() {
  return (
    <section className={classes.sandboxPage}>
      <header>
        <h2>Sandbox</h2>
      </header>

      <ThemeChanger />
    </section>
  );
}

export default SandboxPage;

// CHECKED 0.2.1
