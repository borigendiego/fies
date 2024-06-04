import Link from "next/link";

const LEISTUNG_DATA = [
    {
        title: 'Architektur',
        id: 'architektur',
        text: 
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
                </>,
        image: '/assets/images/leistung/architektur-image.webp',
        reverse: false,
    },
    {
        title: 'Bauantrag',
        id: 'bauantrag',
        text: 
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
                </>,
        image: '/assets/images/leistung/bauantrag.webp',
        reverse: true,
    },
    {
        title: 'Tragwerksplanung',
        id: 'tragwerksplanung',
        text: 
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
                </>,
        image: '/assets/images/banner/tragwerksplanung.webp',
        reverse: false,
    },
    {
        title: 'Technische Gebäudeausrüstung',
        id: 'technische',
        text: 
                <>
                    <p className='my-2'>
                        Die Planung der Technischen Gebäudeausrüstung nimmt einen zunehmend größeren Stellenwert ein.
                        Insbesondere das Konzept der Gebäudeheizung, Kühlung und Belüftung ist ein fester Bestandteil
                        des energetischen Konzeptes einer jeden Planung. Die individuellen Größen und Bedarfe,
                        die aus dem architektonischen Entwurf entstehen, werden durch Heizlastenberechnungen
                        planerisch erfasst und mit unterschiedlichen Konzepten der Anlagentechnik abgedeckt.
                        Hierbei ist es besonders wichtig, dass die einzelnen Komponenten ideal aufeinander
                        abgestimmt sind. Um die genaue Größe der Anlagentechnik zu bestimmen, wird bereits
                        im Vorfeld der voraussichtliche Energiebedarf des Gebäudes ermittelt.
                    </p>
                    <p className='my-2'>
                        Die Vielzahl der Leitungen für Lüftung, Sanitär und Elektro,
                        die bei modernen Gebäuden zum Einsatz kommt, muss im Vorfeld optimal dimensioniert
                        und geplant werden. Anhand unserer 3D- Gebäudemodelle können wir den Flächenbedarf
                        für die Anlagentechnik grafisch im Modell ablesen und eine effiziente Strang- und
                        Leitungsführung entwickeln.
                    </p>
                    <p className='my-2'>
                        Das Ergebnis unserer Planung ist eine optimal abgestimmte Verteilung der gesamten Haustechnik,
                        deren Anlagengröße maßgerecht auf die Bedarfe des Gebäudes zugeschnitten ist.
                    </p>
                </>,
        image: '/assets/images/leistung/technische.webp',
        reverse: true,
    },
    {
        title: 'Brandschutz',
        id: 'brandschutz',
        text: 
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
                </>,
        image: '/assets/images/leistung/brandschutz.webp',
        reverse: false,
    },
    {
        title: 'Energieberatung',
        id: 'energieberatung',
        text: 
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
                </>,
        image: '/assets/images/leistung/energieberatung.webp',
        reverse: true,
    },
    {
        title: 'Projektentwicklung',
        id: 'projektentwicklung',
        text: 
                <>
                    <p className='my-2'>
                        Jedes Grundstück hat seine Eigenheiten und seinen eigenen Zuschnitt.
                        Um Flächen effizient nutzen zu können, entwickeln wir maßgeschneiderte Konzepte zur individuellen Gebäudeplanung.
                        Immer im Einklang mit dem Rahmen von Bauordnungs- und Planungsrecht.
                    </p>
                    <p className='my-2'>
                        Unser Ziel ist eine optimale Ausnutzung des Baulandes.
                        Durch die Planung nach Maß erreichen wir die größtmögliche Wertsteigerung des Grundstücks.
                        Gleichzeitig fördern wir so die ökologisch sinnvolle Nachverdichtung unserer Städte.
                    </p>
                </>,
        image: '/assets/images/projekts/schwabelweis/Schwabelweis-1.webp',
        reverse: false,
    },
    {
        title: 'Finanzierung',
        id: 'finanzierung',
        text: 
                <>
                    <p className='my-2'>
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
                    <p className='my-2'>
                        In Abstimmung mit dem Gebäudekonzept und der jeweiligen Förderfähigkeit des Gebäudes
                        können so individuelle Finanzierungspläne erstellt werden, die genau zum Kapitalbedarf
                        und der Finanzierungsdauer passen.
                    </p>
                </>,
        image: '/assets/images/leistung/finanzierung.webp',
        reverse: true,
    },
    {
        title: 'Sanierung',
        id: 'sanierung',
        text: 
                <>
                    <p className='my-2'>
                        Laut der Deutschen Energie-Agentur müssen bis spätestens 2050 etwa drei Viertel der 22
                        Millionen Gebäude in Deutschland saniert werden – das entspricht ungefähr 2.500
                        Gebäuden täglich.
                    </p>
                    <p className='my-2'>
                        Die meisten dieser Gebäude wurden noch vor Inkrafttreten der ersten
                        Wärmeschutzverordnung im Jahre 1979 errichtet. Problematisch, denn
                        durchschnittliche Altbauten verbrauchen statistisch drei- bis fünfmal
                        so viel Energie, wie vergleichbare Neubauten.
                    </p>
                    <p className='my-2'>
                        Die Klimaziele sind politisch gesetzt und der Gebäudebestand ist
                        der größte Verursacher von Emissionen innerhalb des Sektors.
                        Für den Erfolg der Energiewende müssen hier nun dringend die Emissionen gesenkt werden.
                    </p>
                    <p className='my-2'>
                        Um die "graue Energie" zu nutzen, die bereits zur Herstellung
                        vorhandener Gebäude aufgewendet wurde, ist es alternativlos den
                        Bestand zu ertüchtigen und energetisch zu sanieren.
                        Ein Vorteil für die Ökobilanz und die Betriebskosten des Gebäudes,
                        der zusätzlich die Aufenthalts- und Wohnqualität erhöht.
                    </p>
                    <p className='my-2'>
                        Mit fortschreitendem demografischem Wandel wird zudem altersgerechtes
                        und barrierefreies Wohnen immer wichtiger. Neben den staatlichen
                        Förderungen für die Sanierungsmaßnahmen ein zusätzlicher Grund für
                        die Bestandssanierung.
                    </p>
                    <p className='my-2 italic'>
                        Wir als Architekten und Ingenieure sehen in der Sanierung ein
                        enormes Potenzial – sowohl in ökologischer,
                        als auch ökonomischer Hinsicht.
                    </p>
                </>,
        image: '/assets/images/leistung/sanierung.webp',
        reverse: false,
    },
]


export {
    LEISTUNG_DATA
}