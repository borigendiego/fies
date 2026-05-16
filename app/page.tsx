import Head from 'next/head';
import Slick from '../components/commons/Slick';
import Caraousel from '../components/commons/carousel/Carousel';
import Button from '../components/commons/homeButton';
import Footer from '../components/footer';
import Header from '../components/header';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SPEKTRUM Architektur | Generalplanung',
    description: 'Architektur, Generalplanung',
}

export default function Home() {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Button />
                <Header isHomePage />
                <Slick />
                <Caraousel />

            </main>

            <Footer />
        </div>
    )
}
