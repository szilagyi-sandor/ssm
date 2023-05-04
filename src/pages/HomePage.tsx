import { Button } from '@shared/ui';
import { useGetThemeClasses } from '@shared/themes';
import theLineClasses from './homePage.theLine.module.scss';

function HomePage() {
  const classes = useGetThemeClasses({
    theLineClasses,
  });

  return (
    <section className={classes.homePage}>
      <header>
        <h2>Hello!</h2>
      </header>

      <p>
        I'm Sándor Szilágyi, a full stack developer and this is my portfolio.
      </p>

      <Button>Check out other themes!</Button>
    </section>
  );
}

export default HomePage;
