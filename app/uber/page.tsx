import React from 'react';
import '../../styles/globals.scss';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../../components/header';
import WhoWeAre from '../../components/whoWeAre';
import Footer from '../../components/footer';
import LayoutDisplayer from '../../components/layoutDisplayer';
import Button from '../../components/commons/homeButton';
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'SPEKTRUM | Über',
    description: 'SPEKTRUM - Über',
  }


const Uber: NextPage = () => {
    return(
        <div className='page'>
            <main>
                <Button />
                <Header />
                <WhoWeAre />
                <LayoutDisplayer />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Uber;