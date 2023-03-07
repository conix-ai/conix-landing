import "@/styles/globals.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AppProps } from "next/app";

type PageWithLayout = {
  Layout: (props: any) => JSX.Element;
};

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout || (() => <></>);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
