'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '../../api/getProjects';

const FILTERS = [
    'Alle',
    'Wohnungsbau',
    'Holzbau',
    'Sanierung',
    'Gewerbe- und Industriebau',
    'BIM',
    'Sonstiges',
] as const;

type Filter = typeof FILTERS[number];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};


export default function ProjectsGrid({ projects }: { projects: Project[] }) {
    const [active, setActive] = useState<Filter>('Alle');
    const visible = active === 'Alle'
        ? projects
        : projects.filter((p) => p.projectType === active);

    return (
        <section className="lg:max-w-[1300px] w-[90vw] mx-auto py-12">
            <motion.h1
                className="font-black tracking-tight"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                PROJEKTE
            </motion.h1>

            <motion.div
                className="flex flex-wrap gap-4 my-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {FILTERS.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActive(filter)}
                        className={`uppercase hregular text-base tracking-wide transition-all duration-200 ${
                            active === filter
                                ? 'font-black hbold'
                                : 'font-normal text-black/50 hover:text-black'
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
            >
                {visible.map((project) => {
                    const imageUrl = project.images?.large ?? project.images?.full ?? null;

                    return (
                        <Link
                            key={project.id}
                            href={`/projekte/${project.slug}`}
                            className="group cursor-pointer max-h-[350px] hover:scale-105 duration-700"
                        >
                            <div className="relative w-full h-[350px]">
                                {imageUrl ? (
                                    <Image
                                        src={imageUrl}
                                        alt={project.name}
                                        width={600}
                                        height={400}
                                        className="object-cover w-full h-full"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-200" />
                                )}

                                <div className="absolute inset-0 lg:bg-black/20 bg-black/10 lg:group-hover:bg-black/10 duration-700" />

                                <div className="absolute lg:group-hover:opacity-100 lg:opacity-0 bottom-0 left-0 right-0 bg-black/25 lg:bg-auto group-hover:bg-black/25 backdrop-blur-xs group-hover:backdrop-blur-[2px] duration-500 px-4 py-3">
                                    <h3 className="font-black text-white">{project.name}</h3>
                                    {project.project && (
                                        <p className="hidden md:block text-white/80 text-sm mt-0.5 leading-snug">{project.project}</p>
                                    )}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </motion.div>

        </section>
    );
}
