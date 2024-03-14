import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'ShopNova',
  description: 'Unveiling the Future of Shopping, Today',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} flex flex-col min-h-screen bg-background antialiased overflow-x-hidden`}
      >
        <Header />
        <main className="container flex flex-col flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
