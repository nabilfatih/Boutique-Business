import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { SessionProvider } from "next-auth/react";

import { Progress } from "../components/progress/progress";
import { useProgress } from "../utils/useProgress";

function MyApp({ Component, pageProps }: AppProps) {
  const setIsAnimating = useProgress((state) => state.setIsAnimating);
  const isAnimating = useProgress((state) => state.isAnimating);
  const router = useRouter();
  useEffect(() => {
    const handleStart = () => {
      setIsAnimating(true);
    };
    const handleStop = () => {
      setIsAnimating(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router, setIsAnimating]);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <SessionProvider session={pageProps.session}>
        <Progress isAnimating={isAnimating} />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
