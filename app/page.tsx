import Head from 'next/head';
import Slick from '../components/commons/Slick';
import Caraousel from '../components/commons/carousel/Carousel';
import Button from '../components/commons/homeButton';
import Footer from '../components/footer';
import Header from '../components/header';
import { Metadata } from 'next';
import BlogWrapper from '../components/blog';
import Customers from '../components/Customers';
import getCustomers from '../api/getCustomers';
import { Customer } from '../types';

export const metadata: Metadata = {
    title: 'SPEKTRUM Architektur | Generalplanung',
    description: 'Architektur, Generalplanung',
}

export default async function Home() {
    const customers: Customer[] = await getCustomers();

    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Button />
                <Header isHomePage />
                <Slick />
                <BlogWrapper />
                <Customers customers={customers} />
            </main>
            <Footer />
        </div>
    )
}
