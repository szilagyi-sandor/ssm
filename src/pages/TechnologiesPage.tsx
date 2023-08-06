import { ComingSoon } from '@shared/themes/lightBeam/ui';
import { useGetThemeClasses } from '@shared/themes';
import lightBeam from './technologiesPage.theLine.module.scss';

function TechnologiesPage() {
  const classes = useGetThemeClasses({
    lightBeam,
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

// CHECKED 0.2.0
