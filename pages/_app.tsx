import "@/styles/globals.scss";
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
