export type CarouselType = {
    bgImage?: string,
    title?: string,
    text?: string,
    colorSquare?: boolean,
    bgColor?: string,
    linkTo: string,
    content?: any,
}

const HOME_CAROUSEL:CarouselType[] = [
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
        linkTo: '/',
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
        linkTo: '/',
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
        linkTo: '/',
    },
    {
        bgImage: '/assets/images/home-slider/Spatenstich.jpg',
        title: 'Willich Bauarbeiten',
        linkTo: '/',
    }
];

export { 
    HOME_CAROUSEL
};