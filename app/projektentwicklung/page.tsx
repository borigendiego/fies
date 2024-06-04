import React from 'react';
import type { NextPage } from 'next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from '../../components/commons/homeButton';
import { Metadata } from 'next';
import LeistungLayout from '../../components/commons/leistungLayout';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'SPEKTRUM | Projektentwicklung',
    description: 'SPEKTRUM - Projektentwicklung',
}

const Projektentwicklung: NextPage = () => {
    return(
        <div>
            <main>
                <Button />
                <Header />
                <LeistungLayout
                    title={'Projektentwicklung'}
                    id={'projektentwicklung'}
                    text={
                        <>
                            <p className='my-4'>
                                Jedes Grundstück hat seine Eigenheiten und seinen eigenen Zuschnitt.
                                Um Flächen effizient nutzen zu können, entwickeln wir maßgeschneiderte Konzepte zur individuellen Gebäudeplanung.
                                Immer im Einklang mit dem Rahmen von Bauordnungs- und Planungsrecht.
                            </p>
                            <p className='my-4'>
                                Unser Ziel ist eine optimale Ausnutzung des Baulandes.
                                Durch die Planung nach Maß erreichen wir die größtmögliche Wertsteigerung des Grundstücks.
                                Gleichzeitig fördern wir so die ökologisch sinnvolle Nachverdichtung unserer Städte.
                            </p>
                        </>
                    }
                    image={'/assets/images/projekts/schwabelweis/Schwabelweis-1.webp'}
                    reverse={false}
                    detail
                 />
                <Footer />
            </main>
            <footer>

            </footer>
        </div>
    )
}

export default Projektentwicklung;