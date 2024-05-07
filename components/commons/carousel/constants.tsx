export type CarouselType = {
    bgImage?: string,
    title?: string,
    text?: string,
    colorSquare?: boolean,
    bgColor?: string,
    linkTo: string,
    content?: any,
    lightBoxContent?: any,
}

const HOME_CAROUSEL:CarouselType[] = [
    {
        bgImage: '/assets/images/home-slider/Willich-Bauarbeiten.jpeg',
        title: 'Willich Bauarbeiten',
        linkTo: '/',
        lightBoxContent: <div>
            <iframe
                width="900"
                height="506"
                src="//www.youtube.com/embed/7GJerJvEbAc"
                name="youtube embed"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className={'max-w-full'}
            />
        </div>
    },
    {
        bgImage: '/assets/images/home-slider/Spatenstich.webp',
        title: 'Willich Spatenstich',
        linkTo: 'https://www.meine-woche.de/staedte/willich/spatenstich-auf-dem-toholt-gelaende-in-willich_aid-73284361',
    },
    {
        title: 'Mit BIM bauen wir',
        bgColor: '#feea41',
        colorSquare: true,
        content: <div>
            <p className={'text-white'}>erst</p>
            <p className={'mb-2 text-white'}>DIGITAL</p>
            <p className={'text-white'}>dan</p>
            <p className={'text-white'}>REAL</p>
        </div>,
        linkTo: '/uber#2',
    },
    {
        title: 'Der sichere Weg',
        bgColor: '#89adcd',
        colorSquare: true,
        content: <div>
            <p className={'text-white'}>zur Grundstücks-</p>
            <p className={'mb-2 text-white'}>entwicklung</p>
            <p className={'text-white'}>in 7 Schritten</p>
        </div>,
        linkTo: '/leistung#grundstuck',
    },
    {
        title: 'Unsere Leistungen umfassen das gesamte',
        bgColor: '#89adcd',
        colorSquare: true,
        content: <div>
            <p className={'text-white'}>Leistungs-</p>
            <p className={'mb-2 text-white'}>SPEKTRUM,</p>
            <p className={'text-white'}>im Bereich des</p>
            <p className={'text-white'}>Hochbaus</p>
        </div>,
        linkTo: '/leistung',
    },
    {
        title: 'Wir finden',
        bgColor: '#43c97d',
        colorSquare: true,
        content: <div>
            <p className={'text-white'}>NACHHALTIGE-</p>
            <p className={'mb-2 text-white'}>Lösungen für</p>
            <p className={'text-white'}>zukünftiges</p>
            <p className={'text-white'}>Bauen</p>
        </div>,
        linkTo: '/uber#3',
    },
    {
        title: 'Wir übernehmen',
        bgColor: '#ba69af',
        colorSquare: true,
        content: <div>
            <p className={'text-white'}>PROJEKTE</p>
            <p className={'mb-2 text-white'}>bundesweit,</p>
            <p className={'text-white'}>in jeder</p>
            <p className={'text-white'}>Größenordnung</p>
        </div>,
        linkTo: '/projekte',
    },
    {
        title: 'Wir finden für Ihr',
        bgColor: '#f54f3c',
        colorSquare: true,
        content: <div>
            <p className={'text-white'}>INDIVIDUELLES-</p>
            <p className={'mb-2 text-white'}>Grundstück</p>
            <p className={'text-white'}>die sinnvollste und</p>
            <p className={'text-white'}>effizienteste Lösung</p>
        </div>,
        linkTo: '/leistung#grundstuck',
    },
];

export {
    HOME_CAROUSEL
};