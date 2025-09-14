import { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-grow mt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
