import React from 'react';
import type { NextPage } from 'next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from '../../components/commons/homeButton';
import { Metadata } from 'next';
import LeistungLayout from '../../components/commons/leistungLayout';

export const metadata: Metadata = {
    title: 'SPEKTRUM | Sanierung',
    description: 'SPEKTRUM - Sanierung',
}

const Sanierung: NextPage = () => {
    return(
        <div>
            <main>
                <Button />
                <Header />
                <LeistungLayout
                    title={'Sanierung'}
                    id={'sanierung'}
                    text={
                        <>
                            <p className='my-4'>
                                Laut der Deutschen Energie-Agentur müssen bis spätestens 2050 etwa drei Viertel der 22
                                Millionen Gebäude in Deutschland saniert werden – das entspricht ungefähr 2.500
                                Gebäuden täglich.
                            </p>
                            <p className='my-4'>
                                Die meisten dieser Gebäude wurden noch vor Inkrafttreten der ersten
                                Wärmeschutzverordnung im Jahre 1979 errichtet. Problematisch, denn
                                durchschnittliche Altbauten verbrauchen statistisch drei- bis fünfmal
                                so viel Energie, wie vergleichbare Neubauten.
                            </p>
                            <p className='my-4'>
                                Die Klimaziele sind politisch gesetzt und der Gebäudebestand ist
                                der größte Verursacher von Emissionen innerhalb des Sektors.
                                Für den Erfolg der Energiewende müssen hier nun dringend die Emissionen gesenkt werden.
                            </p>
                            <p className='my-4'>
                                Um die "graue Energie" zu nutzen, die bereits zur Herstellung
                                vorhandener Gebäude aufgewendet wurde, ist es alternativlos den
                                Bestand zu ertüchtigen und energetisch zu sanieren.
                                Ein Vorteil für die Ökobilanz und die Betriebskosten des Gebäudes,
                                der zusätzlich die Aufenthalts- und Wohnqualität erhöht.
                            </p>
                            <p className='my-4'>
                                Mit fortschreitendem demografischem Wandel wird zudem altersgerechtes
                                und barrierefreies Wohnen immer wichtiger. Neben den staatlichen
                                Förderungen für die Sanierungsmaßnahmen ein zusätzlicher Grund für
                                die Bestandssanierung.
                            </p>
                            <p className='my-4 italic'>
                                Wir als Architekten und Ingenieure sehen in der Sanierung ein
                                enormes Potenzial – sowohl in ökologischer,
                                als auch ökonomischer Hinsicht.
                            </p>
                        </>
                    }
                    image={'/assets/images/leistung/sanierung.webp'}
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

export default Sanierung;