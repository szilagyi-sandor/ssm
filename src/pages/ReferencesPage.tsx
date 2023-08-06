import { ComingSoon } from '@shared/themes/lightBeam/ui';
import { useGetThemeClasses } from '@shared/themes';
import lightBeam from './referencePage.theLine.module.scss';

function ReferencesPage() {
  const classes = useGetThemeClasses({
    lightBeam,
  });

  return (
    <section className={classes.referencePage}>
      <header>
        <h2>References page</h2>

        <p style={{ fontWeight: 'bold' }}>Test</p>
      </header>

      <div>
        <ComingSoon />
      </div>
    </section>
  );
}

export default ReferencesPage;

// CHECKED 0.2.0
