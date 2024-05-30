import React from 'react';
import type { NextPage } from 'next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'SPEKTRUM | Impressum',
    description: 'SPEKTRUM - Impressum',
}

const Impressum: NextPage = () => {
    return (
        <div>
            <Header />
            <div className={'privacy-policy md:px-40 px-10 py-10'}>
                <h1>Impressum</h1>
                <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                <p>SPEKTRUM Architektur | Generalplanung PartmbB<br />
                Leipziger Stra&szlig;e 38<br />
                28215 Bremen</p>

                <p><strong>Vertreten durch:</strong><br />
                Johannes Fies<br />
                Johannes Schmitz</p>

                <h2>Kontakt</h2>
                <p>Telefon: 0421-56345811<br />
                Telefax: 0421-52408272<br />
                E-Mail: info@Spektrum-holding.de</p>

                <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
                <p>Berufsbezeichnung:<br />
                Architekt</p>
                <p>Zust&auml;ndige Kammer:<br />
                Architektenkammer der Freien Hansestadt Bremen<br />
                K&ouml;rperschaft des &ouml;ffentlichen Rechts<br />
                Geeren 41/43<br />
                28195 Bremen<br />
                <br />
                Bayerische Architektenkammer<br />
                K&ouml;rperschaft des &Ouml;ffentlichen Rechts<br />
                Waisenhausstr. 4<br />
                80637 M&uuml;nchen</p>
                <p>Verliehen in:<br />
                Deutschland</p>
                <p>Es gelten folgende berufsrechtliche Regelungen:</p>
                <h2>Angaben zur Berufs&shy;haftpflicht&shy;versicherung</h2>
                <p><strong>Name und Sitz des Versicherers:</strong><br />
                AIA AG<br />
                Kaistra&szlig;e 13<br />
                40221 D&uuml;sseldorf</p>
                <p><strong>Geltungsraum der Versicherung:</strong><br />Deutschland</p>

                <h2>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
                <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

                <p>Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
            </div>
            <Footer />
        </div>
    )
}

export default Impressum;