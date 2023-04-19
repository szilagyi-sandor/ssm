import { PropsWithChildren } from 'react';
import { Link, ScrollRestoration, useLocation } from 'react-router-dom';
import { routes } from '../constants';

function Layout({ children }: PropsWithChildren) {
  const { pathname } = useLocation();

  return (
    <section>
      <header>
        <h1>Default app</h1>
        <ul>
          <li>
            <Link to={routes.home}>Home</Link>
          </li>

          <li>
            <Link to={routes.sandbox}>Sandbox</Link>
          </li>
        </ul>
      </header>

      <main>
        <div className="animate-appear" key={pathname}>
          {children}
        </div>
      </main>

      <ScrollRestoration />
    </section>
  );
}

export { Layout };
