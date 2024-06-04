import React from 'react';
import type { NextPage } from 'next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from '../../components/commons/homeButton';
import { Metadata } from 'next';
import LeistungLayout from '../../components/commons/leistungLayout';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'SPEKTRUM | Bauantrag',
    description: 'SPEKTRUM - Bauantrag',
}

const Bauantrag: NextPage = () => {
    return(
        <div>
            <main>
                <Button />
                <Header />
                <LeistungLayout
                    title={'Bauantrag'}
                    id={'bauantrag'}
                    text={
                        <>
                            <p className='my-2'>
                                Mit unserem erfahrenen Team an Ihrer Seite können Sie sich darauf verlassen,
                                dass Ihr Bauantrag sorgfältig und professionell vorbereitet wird. Egal,
                                ob es sich um ein Fertighaus oder ein groß angelegtes Bauprojekt handelt,
                                gehen wir mit höchster Sorgfalt und Präzision vor, um sicherzustellen, dass alle Anforderungen erfüllt werden.
                            </p>
                            <p className='my-2'>
                                Dabei betrachten wir jedes Grundstück und Bauvorhaben individuell und beraten Sie zu Ihren Optionen,
                                um die für Ihr Grundstück maßgeschneiderte Planung, nach Ihren Wünschen umsetzen zu können. Manchmal
                                sind hierbei Abweichungen von den Planungs- oder Bauvorschriften erforderlich, um sicherzustellen,
                                dass Ihr gewünschter Entwurf ohne Einschränkungen genehmigt werden kann. Wir nehmen uns die Zeit,
                                um Ihre individuellen Bedürfnisse zu verstehen und maßgeschneiderte Lösungen anzubieten, die Ihren Erwartungen entsprechen.
                            </p>
                            <p className='my-2 font-bold'>
                                Alles zu einem günstigen Festpreis!
                            </p>
                            <p className='my-2'>
                                Wir kümmern uns um alle Details und Anträge, damit Sie sich auf Ihr Bauprojekt konzentrieren können, ohne sich um bürokratische Hürden kümmern zu müssen.
                            </p>
                            <p className='my-2 mb-6'>
                                Vertrauen Sie auf unsere Expertise und fordern Sie noch heute ein unverbindliches Angebot an, um Ihren Bauantrag professionell und zuverlässig stellen zu können. Wir sind bereit, Ihre Visionen zu verwirklichen und Ihnen bei jedem Schritt Ihres Bauprojekts mit vollem Einsatz zur Seite zu stehen.
                            </p>
                            <Link href={'/kontakt'} className="p-3 rounded-xl duration-500  bg-[#89adcd99] hover:bg-[#7294b29c] hover:text-white hover:underline font-bold w-fit">
                                Hier Angebot anfordern!
                            </Link>
                        </>
                    }
                    image={'/assets/images/leistung/bauantrag.webp'}
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

export default Bauantrag;