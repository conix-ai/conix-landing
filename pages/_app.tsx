import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export type PageWithLayout = {
  Layout: (props: any) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
