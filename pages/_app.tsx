import React from "react";
import App, { Container } from "next/app";
import Background from "./components/background";
import Head from "next/head";

export default class MyApp extends App {
    public static async getInitialProps ({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    public render () {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <Head>
                    <title>Deaf Creator</title>
                </Head>
                <Background>
                    <Component {...pageProps }/>
                </Background>
            </Container>
        );
    }
}
