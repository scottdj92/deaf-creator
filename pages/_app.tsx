import React from "react";
import App, { Container } from "next/app";
import Background from "./components/background";

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
                <Background>
                    <Component {...pageProps }/>
                </Background>
            </Container>
        );
    }
}
