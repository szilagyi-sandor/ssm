import { useAppsettingsContext } from '@features/appsettings';

function HomePage() {
  const { customMessage } = useAppsettingsContext();
  return (
    <section>
      <header>
        <h2>Home page</h2>

        <p>{customMessage}</p>
      </header>
    </section>
  );
}

export default HomePage;
