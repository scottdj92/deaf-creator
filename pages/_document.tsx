import "static/index.scss";
import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
    public getInitialProps ({ renderPage }) {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props}/>));
        const styleTags = sheet.getStyleElement();
        return { ...page, styleTags };

    }
    public render () {
        const { styleTags } = this.props;
        return (
            <html lang="en">
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <title>Deaf Creators</title>
                <link rel="stylesheet" href="/_next/static/style.css"/>
                <style dangerouslySetInnerHTML={{__html: styleTags}}/>
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
            </html>
        );
    }
}

export default MyDocument;
