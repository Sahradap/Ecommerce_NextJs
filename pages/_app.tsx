import type { AppProps } from "next/app";
import GlobalLayout from "@/app/components/layout/GlobalLayout";
import "../app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}