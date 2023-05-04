import { ComingSoon } from '@shared/ui';
import { useGetThemeClasses } from '@shared/themes';
import theLineClasses from './technologiesPage.theLine.module.scss';

function TechnologiesPage() {
  const classes = useGetThemeClasses({
    theLineClasses,
  });

  return (
    <section className={classes.technologiesPage}>
      <header>
        <h2>Technologies page</h2>
      </header>

      <div>
        <ComingSoon />
      </div>
    </section>
  );
}

export default TechnologiesPage;
