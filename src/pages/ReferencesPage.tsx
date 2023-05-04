import { ComingSoon } from '@shared/ui';
import { useGetThemeClasses } from '@shared/themes';
import theLineClasses from './referencePage.theLine.module.scss';

function ReferencesPage() {
  const classes = useGetThemeClasses({
    theLineClasses,
  });

  return (
    <section className={classes.referencePage}>
      <header>
        <h2>References page</h2>
      </header>

      <div>
        <ComingSoon />
      </div>
    </section>
  );
}

export default ReferencesPage;
