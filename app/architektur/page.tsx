import React from 'react';
import type { NextPage } from 'next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from '../../components/commons/homeButton';
import { Metadata } from 'next';
import LeistungLayout from '../../components/commons/leistungLayout';

export const metadata: Metadata = {
    title: 'SPEKTRUM | Architektur',
    description: 'SPEKTRUM - Architektur',
}

const Architektur: NextPage = () => {
    return(
        <div>
            <main>
                <Button />
                <Header />
                <LeistungLayout
                    title={'Architektur'}
                    id={'architektur'}
                    text={
                        <>
                            <p className="py-2 text-base">
                                Im Bereich des Hochbaus bieten wir Ihnen umfangreiche Planungs- und Beratungsleistungen an.
                            Wir planen und realisieren Gebäude verschiedenster Größenordnung und Funktionen, von der ersten Standortanalyse bis zur Inbetriebnahme des fertigen Bauwerks.</p>
                            <p className="py-2 text-base">
                                Unser Leistungsspektrum umfasst als freiberufliche Architekten die Beratung, Betreuung und Vertretung unserer Auftraggeber*Innen in allen die Planung, Ausführung und Überwachung eines Vorhabens betreffenden Angelegenheiten. Bei Bedarf verantworten wir hierbei als Generalplaner die Organisation eines integralen Planungsteams aus sämtlichen, für den Bau erforderlichen Fachbereichen, wie z.B. der Tragwerksplanung, technischen Gebäudeausrüstung, Freianlagen, sowie der Bauphysik.
                            </p>
                            <p className="py-2 text-base">
                                Unser Anspruch ist es, mit unserer Planung ein optimales, wirtschaftliches Ergebnis für unsere Bauherren zu erzielen.
                                Dies erreichen wir vor allem durch die frühe Einbindung aller am Bau beteiligten Disziplinen.
                                Auf diesem Weg können sehr früh die ersten Unstimmigkeiten ausgeräumt und schnell belastbare Grundlagen für die weitere Planung geschaffen werden.
                                Aufgrund der interdisziplinären Zusammenarbeit können bereits in den ersten Planungsphasen Qualitäten und Standards für das gesamte Bauvorhaben festgelegt werden, wodurch die Kostensicherheit enorm erhöht wird.
                            </p>
                        </>
                    }
                    image={'/assets/images/leistung/architektur-image.webp'}
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

export default Architektur;