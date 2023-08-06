import { Button } from '@shared/themes/lightBeam';
import classes from './homePage.module.scss';

function HomePage() {
  return (
    <section className={classes.homePage}>
      <header>
        <h2>Hello!</h2>
      </header>

      <p>
        I'm Sándor Szilágyi, a full stack developer and this is my portfolio.
      </p>

      <Button>Check out my themes</Button>
    </section>
  );
}

export default HomePage;

// CHECKED 0.2.1
