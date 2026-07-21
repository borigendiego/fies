'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../header';
import { Project } from '../../api/getProjects';

export default function SingleProject({ project }: { project: Project }) {
    const [index, setIndex] = useState(0);
    const [showInfo, setShowInfo] = useState(false);

    const slides: string[] = project.gallery.length > 0
        ? project.gallery.map(img => img.fullUrl)
        : [project.images?.full ?? project.images?.large ?? ''].filter(Boolean);

    const wrap = (v: number) => (v + slides.length) % slides.length;

    const infoFields = [
        { label: 'Ort', value: project.location },
        { label: 'Projekt', value: project.subTitle },
        { label: 'Leistungen', value: project.services },
        { label: 'Zeitraum', value: project.dates },
        { label: 'Bauherr', value: project.owner },
    ].filter(f => f.value);

    return (
        <div className="relative w-screen h-screen overflow-hidden bg-black select-none">

            <Header isHomePage />

            {/* Slider — all slides stacked, fade via opacity */}
            {slides.map((url, i) => (
                <div
                    key={url}
                    className="absolute inset-0 transition-opacity duration-[900ms] ease-in-out"
                    style={{ opacity: i === index ? 1 : 0 }}
                >
                    <Image
                        src={url}
                        alt={project.name}
                        quality={100}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                        priority={i === 0}
                        draggable={false}
                    />
                    <div className="absolute inset-0 bg-black/15" />
                </div>
            ))}

            {/* Prev arrow */}
                <button
                    onClick={() => setIndex(i => wrap(i - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white text-6xl leading-none"
                    aria-label="Previous"
                >
                    ‹
                </button>

            {/* Next arrow */}
                <button
                    onClick={() => setIndex(i => wrap(i + 1))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white text-6xl leading-none"
                    aria-label="Next"
                >
                    ›
                </button>
            {/* Bottom-left: title + description */}
            <div className="absolute bottom-8 left-8 z-10 max-w-[60%]">
                <h2 className="text-white font-black text-xl md:text-2xl uppercase tracking-widest">
                    {project.name}
                </h2>
                {project.project && (
                    <p className="text-white/75 text-xs md:text-sm mt-1 uppercase tracking-wider">
                        {project.project}
                    </p>
                )}
            </div>

            {/* Top-right: info + back buttons */}
            <div className="absolute top-24 md:top-16 right-6 z-50 flex flex-col items-center gap-3">
                <button
                    onClick={() => setShowInfo(v => !v)}
                    className="w-9 h-9 rounded-full border border-white/70 flex items-center justify-center text-white text-sm italic font-serif hover:bg-white/20 transition-colors duration-200"
                    aria-label="Info"
                >
                    i
                </button>
                <Link
                    href="/projekte"
                    className="w-9 h-9 rounded-full border border-white/70 flex items-center justify-center text-white text-lg hover:bg-white/20 transition-colors duration-200"
                    aria-label="Back to Projekte"
                >
                    ←
                </Link>
            </div>

            {/* Slide counter */}
            {slides.length > 1 && (
                <div className="absolute bottom-8 right-8 z-10 text-white/60 text-sm tracking-widest">
                    {index + 1} / {slides.length}
                </div>
            )}

            {/* Info panel */}
            <AnimatePresence>
                {showInfo && (
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 60 }}
                        transition={{ duration: 0.35, ease: 'easeOut' }}
                        className="absolute top-0 right-0 h-full w-full md:w-[380px] bg-black/75 backdrop-blur-sm z-40 flex flex-col justify-center px-10 py-24 text-white"
                    >
                        <h3 className="font-black text-lg uppercase tracking-widest mb-8">
                            {project.name}
                        </h3>
                        <div className="flex flex-col gap-6 text-sm">
                            {infoFields.map(({ label, value }) => (
                                <div key={label}>
                                    <p className="text-white/45 uppercase text-xs tracking-widest mb-1">
                                        {label}
                                    </p>
                                    <p className="font-semibold leading-snug whitespace-pre-line">
                                        {typeof value === 'string' ? value.replace(/[\r\n]+/g, '\n') : value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
