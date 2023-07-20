import Sidebar from '@/components/Sidebar';

import type { Metadata } from 'next';

import './globals.css';
import { Figtree } from 'next/font/google';
import SupabaseProvider from '@/providers/SupabaseProvider';

const font = Figtree({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Spotify',
  description: 'Listen to your favourite music.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SupabaseProvider>
          <Sidebar>{children}</Sidebar>
        </SupabaseProvider>
      </body>
    </html>
  );
}
