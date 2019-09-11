import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import NProgress from 'nprogress';
import Router, { withRouter } from 'next/router';
import 'styles/styles.scss';

const Noop = ({ children }) => children

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

class MyApp extends App {
  static async getInitialProps(props) {
    const { Component, ctx } = props;
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || Noop
    return (
      <React.Fragment>
        <Head>
          <title>
            NovaMining Network | Decentralized peer-to-peer hashing power marketplace
          </title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.Fragment>
    );
  }
}

export default withRouter(MyApp);
