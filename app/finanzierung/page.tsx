import React from 'react';
import type { NextPage } from 'next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from '../../components/commons/homeButton';
import { Metadata } from 'next';
import LeistungLayout from '../../components/commons/leistungLayout';

export const metadata: Metadata = {
    title: 'SPEKTRUM | Finanzierung',
    description: 'SPEKTRUM - Finanzierung',
}

const Finanzierung: NextPage = () => {
    return(
        <div>
            <main>
                <Button />
                <Header />
                <LeistungLayout
                    title={'Finanzierung'}
                    id={'finanzierung'}
                    text={
                        <>
                            <p className='my-4'>
                                Wenn Sie Hilfe bei der Finanzierung Ihres Bauvorhabens benötigen,
                                unterstützen wir Sie gerne! Wir arbeiten sowohl mit Banken als auch mit freien
                                Finanzierern zusammen und finden für Sie die besten Konditionen. Je nach Energie-Standard
                                des Gebäudes ist es möglich, Fördermittel für den Neubau, oder einer energetischen
                                Sanierung zu beantragen. Als Planer können wir frühzeitig passend zu Ihrem individuellen
                                Gebäude, die passenden Finanzierungen mit den entsprechenden Förderungen für
                                Sie zusammenstellen. So bietet die KfW (Kreditanstalt für Wiederaufbau) beispielsweise
                                im Rahmen ihrer Förderungen besonders niedrige Zinsen oder Tilgungszuschüsse für
                                energieeffiziente Gebäude.
                            </p>
                            <p className='my-4'>
                                In Abstimmung mit dem Gebäudekonzept und der jeweiligen Förderfähigkeit des Gebäudes
                                können so individuelle Finanzierungspläne erstellt werden, die genau zum Kapitalbedarf
                                und der Finanzierungsdauer passen.
                            </p>
                        </>
                    }
                    image={'/assets/images/leistung/finanzierung.webp'}
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

export default Finanzierung;