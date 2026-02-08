import type { PropsWithChildren } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-background-light text-text-main">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
