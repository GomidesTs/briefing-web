import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'Briefing Web | Moldando experiências digitais por meio de design excepcional.',
  description:
    'Crie um legado digital com nosso design web personalizado e SEO avançado. Destaque-se e alcance o sucesso online!'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="antialiased">
      <body className={inter.className}>
        <main className="m-auto mt-12 px-4 pb-4 md:mt-20 md:max-w-4xl lg:max-w-6xl">
          {children}
        </main>
      </body>
    </html>
  );
}
