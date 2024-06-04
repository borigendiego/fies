import React from 'react';
import type { NextPage } from 'next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from '../../components/commons/homeButton';
import { Metadata } from 'next';
import LeistungLayout from '../../components/commons/leistungLayout';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'SPEKTRUM | Brandschutz',
    description: 'SPEKTRUM - Brandschutz',
}

const Brandschutz: NextPage = () => {
    return(
        <div>
            <main>
                <Button />
                <Header />
                <LeistungLayout
                    title={'Brandschutz'}
                    id={'brandschutz'}
                    text={
                        <>
                            <p className='my-2'>
                                Egal ob Wohnhaus, Schule oder Bürogebäude, die Brandschutzplanung
                                ist für die Sicherheit eines jeden Gebäudes unerlässlich.
                                Wir betrachten den vorbeugenden Brandschutz von Beginn der Planung als untrennbaren Teil
                                der Architektur. Als oberstes Ziel gilt, im Brandfall die Sicherheit der
                                Nutzer sicherstellen zu können. Wir beziehen je nach Gebäudegröße und Nutzeranzahl
                                die notwendigen Abmessungen der ersten und zweiten Rettungswege sinnvoll in das
                                Gebäudekonzept mit ein. Ebenso erstellen wir die Entrauchungskonzepte für Gebäude
                                und Tiefgaragen, unter Berücksichtigung der unterschiedlichen Brandverhalten der
                                Baustoffe. Da im Falle eines Brandes die größte Gefahr von der Rauchentwicklung
                                im Gebäude ausgeht, ist es für die Planung besonders wichtig, das Brandverhalten
                                der Baustoffe und den Feuerwiderstand der tragenden Bauteile, mit den Entrauchungs-
                                und Fluchtwegkonzepten in Einklang zu bringen.
                            </p>
                            <p className='my-2'>
                                Nur durch eine sorgfältig abgestimmte Planung kann sichergestellt werden,
                                dass im Brandfall niemand zu Schaden kommt. Wir liefern qualifizierte
                                Brandschutzkonzepte, die auf die individuellen Gegebenheiten des Bauvorhabens
                                angepasst sind - Immer im Einklang mit den bauordnungsrechtlichen Vorschriften.
                            </p>
                        </>
                    }
                    image={'/assets/images/leistung/brandschutz.webp'}
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

export default Brandschutz;