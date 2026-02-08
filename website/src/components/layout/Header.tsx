import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from '../../data/site-data';
import { Container } from '../common/Container';
import { cn } from '../../lib/cn';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 font-display text-sm font-bold text-primary">
            Z
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-text-main">Zyshaire</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn('text-sm font-medium text-text-muted transition hover:text-primary', isActive && 'text-primary')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600">
            Book a Call
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md border border-slate-300 px-3 py-1 text-sm font-medium text-text-main lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>
      </Container>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <Container className="flex flex-col py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={({ isActive }) => cn('rounded-md px-2 py-2 text-sm', isActive ? 'bg-primary/10 text-primary' : 'text-text-main')}
              >
                {item.label}
              </NavLink>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
