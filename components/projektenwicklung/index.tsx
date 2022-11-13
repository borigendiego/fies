import React from "react";

const Projektewicklung = () => {
    return(
        <div className='relative'>
            <img src='/assets/images/leistung/projektewick-bg.png' className='absolute h-full w-full' />
            <div className='flex flex-col relative md:pl-16 md:pt-12 md:pb-12'>
                <h1 className='text-5xl'>Projektewicklung</h1>
                <div className='w-3/12'>
                    <p className='pt-5 text-lg'>
                        Jedes Grundstück hat seine Eigenheiten und seinen eigenen Zuschnitt.
                         Um Flächen effizient nutzen zu können, entwickeln wir maßgeschneiderte Konzepte zur individuellen Gebäudeplanung.
                          Immer im Einklang mit dem Rahmen von Bauordnungs- und Planungsrecht.
                    </p>
                    <p className='pt-5 pb-5 text-lg'>
                        Unser Ziel ist eine optimale Ausnutzung des Baulandes.
                         Durch die Planung nach Maß erreichen wir die größtmögliche Wertsteigerung des Grundstücks.
                          Gleichzeitig fördern wir so die ökologisch sinnvolle Nachverdichtung unserer Städte.
                    </p>
                    <a className='cursor-pointer font-semibold hover:underline'>Mehr sehen</a>
                </div>
            </div>
        </div>
    )
}

export default Projektewicklung