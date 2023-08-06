import { useGetThemeClasses } from '@shared/themes';
// TODO: #1 modify import from theme
import { Button } from '@shared/themes/lightBeam/ui/Button';
import lightBeam from './homePage.theLine.module.scss';

function HomePage() {
  const classes = useGetThemeClasses({
    lightBeam,
  });

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

// CHECKED 0.2.0
