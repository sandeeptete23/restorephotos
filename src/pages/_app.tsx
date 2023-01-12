import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import { Inter } from '@next/font/google'
import "../styles/globals.css";

const inter = Inter({
  weight: '400',
  subsets: ['latin'],
})

const MyApp: AppType<AppProps & { session: Session }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
      <Analytics />
    </SessionProvider>
  );
};

export default MyApp;
