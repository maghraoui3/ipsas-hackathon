/* eslint-disable @next/next/no-sync-scripts */
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Toaster } from '@/components/ui/toaster';
import { ClerkProvider } from '@clerk/nextjs';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IPSAS - Institut Polytechnique des Sciences Avancées de Sfax',
  description: 'Leading engineering school in Tunisia offering high-quality education in various engineering fields.',
  keywords: ['IPSAS', 'engineering school', 'Tunisia', 'engineering programs', 'admissions'],
  openGraph: {
    title: 'IPSAS - Institut Polytechnique des Sciences Avancées de Sfax',
    description: 'Leading engineering school in Tunisia offering high-quality education in various engineering fields.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2866&q=80',
        width: 1200,
        height: 630,
        alt: 'IPSAS Campus',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      signInFallbackRedirectUrl={process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL}
      signUpFallbackRedirectUrl={process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL}>
      <html lang="en" suppressHydrationWarning>
        <head>
          <script src="https://js.puter.com/v2/"></script>
        </head>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}