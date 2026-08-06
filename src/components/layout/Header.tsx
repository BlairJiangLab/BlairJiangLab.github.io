import { Link, NavLink, useLocation } from 'react-router-dom';
import { Container } from '../ui/Container';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/work', label: 'Work' },
  { to: '/blog', label: 'Notes' },
  { to: '/about', label: 'About' },
];

export function Header() {
  const location = useLocation();
  // Don't show on home — home has its own hero
  const isHome = location.pathname === '/';

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-md bg-bg/80 dark:bg-bg-dark/80 border-b border-border transition-colors ${
        isHome ? 'border-transparent' : ''
      }`}
    >
      <Container size="wide">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="font-serif text-lg font-semibold tracking-tight text-fg dark:text-fg-dark hover:text-accent transition-colors"
          >
            Atelier
          </Link>
          <nav className="flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `px-3 py-1.5 text-sm rounded-md transition-colors ${
                    isActive
                      ? 'text-fg dark:text-fg-dark'
                      : 'text-muted dark:text-muted-dark hover:text-fg dark:hover:text-fg-dark'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="ml-1 pl-2 border-l border-border">
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
