import React from 'react';
import type { NextPage } from 'next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from '../../components/commons/homeButton';
import { Metadata } from 'next';
import LeistungLayout from '../../components/commons/leistungLayout';

export const metadata: Metadata = {
    title: 'SPEKTRUM | Technische',
    description: 'SPEKTRUM - Technische',
}

const Technische: NextPage = () => {
    return(
        <div>
            <main>
                <Button />
                <Header />
                <LeistungLayout
                    title={'Technische Gebäudeausrüstung'}
                    id={'technische'}
                    text={
                        <>
                            <p className='my-4'>
                                Die Planung der Technischen Gebäudeausrüstung nimmt einen zunehmend größeren Stellenwert ein.
                                Insbesondere das Konzept der Gebäudeheizung, Kühlung und Belüftung ist ein fester Bestandteil
                                des energetischen Konzeptes einer jeden Planung. Die individuellen Größen und Bedarfe,
                                die aus dem architektonischen Entwurf entstehen, werden durch Heizlastenberechnungen
                                planerisch erfasst und mit unterschiedlichen Konzepten der Anlagentechnik abgedeckt.
                                Hierbei ist es besonders wichtig, dass die einzelnen Komponenten ideal aufeinander
                                abgestimmt sind. Um die genaue Größe der Anlagentechnik zu bestimmen, wird bereits
                                im Vorfeld der voraussichtliche Energiebedarf des Gebäudes ermittelt.
                            </p>
                            <p className='my-4'>
                                Die Vielzahl der Leitungen für Lüftung, Sanitär und Elektro,
                                die bei modernen Gebäuden zum Einsatz kommt, muss im Vorfeld optimal dimensioniert
                                und geplant werden. Anhand unserer 3D- Gebäudemodelle können wir den Flächenbedarf
                                für die Anlagentechnik grafisch im Modell ablesen und eine effiziente Strang- und
                                Leitungsführung entwickeln.
                            </p>
                            <p className='my-4'>
                                Das Ergebnis unserer Planung ist eine optimal abgestimmte Verteilung der gesamten Haustechnik,
                                deren Anlagengröße maßgerecht auf die Bedarfe des Gebäudes zugeschnitten ist.
                            </p>
                        </>
                    }
                    image={'/assets/images/leistung/technische.webp'}
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

export default Technische;