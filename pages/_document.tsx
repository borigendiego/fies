import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content='Spektrum' />
                    <meta property='og:description' content="Architektur" />
                    <meta property='og:site_name' content='spektrum' />

                    <script type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: `{
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                "name": "spektrum",
                                "url": "https://spektrum-holding.de/",
                                "logo": "https://spektrum-holding.de/assets/images/logo_white.png",
                                "contactPoint": {
                                    "@type": "ContactPoint",
                                    "telephone": "+49 (0) 421 – 56 34 58 11",
                                    "contactType": "customer service",
                                    "areaServed": "DE",
                                    "availableLanguage": "de"
                                },
                                "sameAs": []
                            }`,
                        }}
                    />
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=G-YW6GNYBGV2"
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-YW6GNYBGV2', {
                                  page_path: window.location.pathname,
                                });
                              `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
    
}
