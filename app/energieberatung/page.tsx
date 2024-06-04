import React from 'react';
import type { NextPage } from 'next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Button from '../../components/commons/homeButton';
import { Metadata } from 'next';
import LeistungLayout from '../../components/commons/leistungLayout';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'SPEKTRUM | Energieberatung',
    description: 'SPEKTRUM - Energieberatung',
}

const Energieberatung: NextPage = () => {
    return(
        <div>
            <main>
                <Button />
                <Header />
                <LeistungLayout
                    title={'Energieberatung'}
                    id={'energieberatung'}
                    text={
                        <>
                            <p className='my-2'>
                                Über die Lebensdauer von 50 Jahren gerechnet, fallen nur ca.
                                15 % der Gesamtkosten, die von einem Gebäude verursacht werden,
                                auf seine Baukosten an. 5 % entstehen im Durchschnitt durch seine Abbruchs-
                                und Planungskosten. Die restlichen 80 % und damit der mit Abstand größte Teil
                                der Gesamtkosten, entfallen auf die Instandhaltungs- und Betriebskosten des Gebäudes.
                            </p>
                            <p className='my-2'>
                                Daher ist es nicht nur ökologisch, sondern auch ökonomisch sehr sinnvoll,
                                ein Gebäude energieeffizient zu planen und zu bauen. Mit einer höheren Anfangsinvestition
                                können so deutlich höhere Kosten vermieden werden, die durch die spätere Nutzung
                                des Gebäudes entstehen.
                            </p>
                            <p className='my-2'>
                                Wir erstellen Energiekonzepte, bei denen die anfänglichen Mehrkosten durch staatliche
                                Zuschüsse subventioniert werden. Durch vergünstigte Zinsen über geförderte Kredite der KfW
                                (Kreditanstalt für Wiederaufbau) amortisieren sich die anfänglichen Kosten besonders
                                schnell.
                            </p>
                            <p className='my-2'>
                                Wir möchten eine langfristige Lösung finden, die sowohl die Umwelt schont und
                                gleichzeitig wirtschaftlich sinnvoll ist. Die Umsetzung der Energiekonzepte wird
                                von unseren Energieberatern auf der Baustelle überwacht und dokumentiert.
                                Die KfW erhält die Protokolle zur Bestätigung und gibt Ihre Förderung frei.
                            </p>
                        </>
                    }
                    image={'/assets/images/leistung/energieberatung.webp'}
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

export default Energieberatung;