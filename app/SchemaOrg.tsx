'use client'
import React from "react";
import Script from "next/script"

const SchemaOrg = () => {
    return (
        <>
            <Script
                strategy="afterInteractive"
                type="application/ld+json"
                id="schema-org"
                dangerouslySetInnerHTML={{
                    __html: `{
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Spektrum Architekten Ingenieure",
                        "url": "https://spektrum-holding.de/",
                        "logo": "https://spektrum-holding.de/assets/images/logo.png",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+49 (0) 421 – 56 34 58 11",
                            "contactType": "customer service",
                            "areaServed": "DE",
                            "availableLanguage": "de",
                            "email": "info@spektrum-holding.de"
                        },
                        "address": [
                            {
                                "@type": "PostalAddress",
                                "addressLocality": "Bremen",
                                "addressRegion": "HB",
                                "postalCode": "28195",
                                "streetAddress": "Jakobikirchhof 9"
                            },
                            {
                                "@type": "PostalAddress",
                                "addressLocality": "Unterschleißheim",
                                "addressRegion": "HH",
                                "postalCode": "85716",
                                "streetAddress": "Max-Planck-Straße 17"
                            }
                        ],
                        "founder": [
                            {
                                "@type": "Person",
                                "name": "Johannes Fies"
                            },
                            {
                                "@type": "Person",
                                "name": "Johannes Schmitz"
                            }
                        ],
                        "description": "Wir sind ein junges Team engagierter Architekten und Ingenieuren, die sich die ganzheitliche und integrale Gebäudeplanung zur Aufgabe gemacht haben."
                    }`,
                }}
            />
        </>
    )
}

export default SchemaOrg