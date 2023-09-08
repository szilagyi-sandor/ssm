import { ThemeChanger, useThemeContext } from '@shared/themes';
import {
  useLightBeamStateContext,
  useSetLightBeamStateContext,
} from '@shared/themes/lightBeam/ui';
import classes from './sandboxPage.module.scss';

function SandboxPage() {
  const { upcomingThemeId } = useThemeContext();
  const setLightBeam = useSetLightBeamStateContext();
  const { on, animating } = useLightBeamStateContext();

  return (
    <section className={classes.sandboxPage}>
      <header>
        <h2>Sandbox</h2>
      </header>

      <button
        type="button"
        disabled={!!upcomingThemeId || animating}
        onClick={() =>
          setLightBeam((prevState) => ({ ...prevState, on: !prevState.on }))
        }
      >
        light beam {on ? 'off' : 'on'}
      </button>

      <ThemeChanger disabled={animating} />
    </section>
  );
}

export default SandboxPage;

// CHECKED 0.2.1
