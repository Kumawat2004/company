import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Future Global IT Solution — Custom Software, Cloud & AI Services',
  description: 'We build secure, scalable web & mobile solutions with modern stacks. Expert team delivering reliable digital solutions.',
  keywords: 'software development, cloud, devops, ai, react, node, nextjs',
  openGraph: {
    title: 'Future Global IT Solution — Building Reliable Digital Solutions',
    description: 'We build secure, scalable web & mobile solutions with modern stacks.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}