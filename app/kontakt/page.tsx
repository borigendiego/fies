import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../../components/header';
import KontaktComponent from '../../components/kontaktComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SPEKTRUM | Kontakt',
    description: 'SPEKTRUM - Kontakt',
}

const Kontakt: NextPage = () => {
    return(
        <div>
            <main>
                <Header isHomePage />
                <KontaktComponent />
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Kontakt;