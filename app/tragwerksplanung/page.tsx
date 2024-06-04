import React from 'react';
import type { NextPage } from 'next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from '../../components/commons/homeButton';
import { Metadata } from 'next';
import LeistungLayout from '../../components/commons/leistungLayout';

export const metadata: Metadata = {
    title: 'SPEKTRUM | Tragwerksplanung',
    description: 'SPEKTRUM - Tragwerksplanung',
}

const Tragwerksplanung: NextPage = () => {
    return(
        <div>
            <main>
                <Button />
                <Header />
                <LeistungLayout
                    title={'Tragwerksplanung'}
                    id={'tragwerksplanung'}
                    text={
                        <>
                            <p className="my-2 text-base">
                                Die Statik eines Gebäudes ist essenzieller Bestandteil seiner Planung. Daher binden wir die Tragwerksplanung
                                von Beginn der Planung in das architektonische Konzept mit ein. Durch die frühzeitige Abstimmung mit den
                                architektonischen Erfordernissen ermöglichen wir eine sinnvolle und kostensparende Konstruktion des Bauwerkes.
                            </p>
                            <p className='my-2'>
                                Durch die gleichzeitige Planung von Architektur und Statik finden wir eine Konstruktion, die im
                                Einklang mit der räumlichen Aufteilung des Bauwerkes steht. Durch eine gleichmäßige Verteilung der
                                Lasten können die tragenden Bauteile einheitlich und ausgewogen konstruiert werden. Anhand von
                                digitalen Gebäudemodellen können wir als Architekten und Ingenieure sehen, wie alle Komponenten
                                des Entwurfs zusammenwirken. Ideal aufeinander abgestimmt, können wir so die Struktur des
                                Gebäudes optimieren und die effizienteste Methode für seine Konstruktion wählen. Ebenso können
                                wir anhand der Gebäudemodelle die kritischen Faktoren wie Kosten und Zeit digital überlagern. Die
                                Auswirkungen der im Entwurf getroffenen Entscheidungen, wie beispielsweise die Gebäudeform und
                                das Baumaterial, können so in verschiedenen Varianten überprüft und miteinander verglichen
                                werden.
                            </p>
                        </>
                    }
                    image={'/assets/images/banner/tragwerksplanung.webp'}
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

export default Tragwerksplanung;