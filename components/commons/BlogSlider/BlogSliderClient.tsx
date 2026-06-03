'use client'

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Blog } from '../../../types';
import getAllBlogs from '../../../api/getAllBlogs';

const SLIDE_GAP = 15;

export default function BlogSliderClient() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(4);
    const [dragOffset, setDragOffset] = useState(0);
    const [dragging, setDragging] = useState(false);
    const slideRef = useRef<HTMLDivElement>(null);
    const startX = useRef(0);

    // ← fetch integrado, reemplaza la prop blogs
    useEffect(() => {
        getAllBlogs()
            .then(setBlogs)
            .finally(() => setLoading(false));
    }, []);

    const total = blogs.length + 1;
    const max = Math.max(0, total - slidesPerView);

    useEffect(() => {
        const onResize = () => setSlidesPerView(window.innerWidth >= 720 ? 4 : 1);
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const clamp = (v: number) => Math.min(Math.max(v, 0), max);

    const getSlideWidth = () => {
        if (!slideRef.current) return 315;
        return slideRef.current.offsetWidth + SLIDE_GAP;
    };

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        setDragging(true);
        startX.current = e.clientX;
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!dragging) return;
        setDragOffset(e.clientX - startX.current);
    };

    const onPointerUp = () => {
        if (!dragging) return;
        setDragging(false);
        const threshold = getSlideWidth() / 3;
        if (dragOffset < -threshold) setIndex(i => clamp(i + 1));
        else if (dragOffset > threshold) setIndex(i => clamp(i - 1));
        setDragOffset(0);
    };

    const translateX = -(index * getSlideWidth()) + dragOffset;

    // ← estado de carga
    if (loading) return (
        <div className="flex items-center justify-center h-[320px] w-full">
            <span className="text-gray-400 text-sm animate-pulse">Cargando...</span>
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden md:max-w-[1300px] mx-auto"
        >
            <div
                className={`flex select-none cursor-grab active:cursor-grabbing ${dragging ? '' : 'transition-transform duration-500 ease-in-out'}`}
                style={{ transform: `translateX(${translateX}px)`, gap: SLIDE_GAP }}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerLeave={onPointerUp}
            >
                {blogs.map((blog, i) => (
                    <div
                        key={blog.id}
                        ref={i === 0 ? slideRef : undefined}
                        className="flex-none w-[340px] md:w-[300px]"
                    >
                        <div className="relative w-full h-[360px] md:h-[320px] group cursor-pointer bg-white hover:shadow-xl duration-700">
                            <Link href={`/aktuelles#${blog.id}`}>
                                {blog.imageUrl && (
                                    <Image
                                        src={blog.imageUrl}
                                        fill
                                        alt={blog.title}
                                        style={{ objectFit: 'cover', objectPosition: 'center' }}
                                        draggable={false}
                                    />
                                )}
                                <div className="flex flex-col justify-end absolute h-full w-full left-0 top-0 bg-black/30 md:opacity-30 duration-700 group-hover:opacity-100">
                                    <h2 className="text-xl text-white font-bold p-4 md:opacity-0 duration-700 group-hover:opacity-100">
                                        {blog.title}
                                    </h2>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}

                <div className="flex-none w-[340px] md:w-[300px] h-[360px] md:h-[320px]">
                    <Link href="/aktuelles">
                        <div className="flex flex-col justify-center items-center w-full h-full group hover:bg-[#89adcdcc] bg-[#89adcdcc] md:bg-white backdrop-blur-sm cursor-pointer duration-1000">
                            <h2 className="text-xl text-black group-hover:text-white duration-700">READ MORE</h2>
                        </div>
                    </Link>
                </div>
            </div>

            {index > 0 && (
                <button
                    onClick={() => setIndex(i => clamp(i - 1))}
                    className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-md w-10 h-10 flex items-center justify-center text-3xl leading-none"
                    aria-label="Previous"
                >
                    ‹
                </button>
            )}

            {index < max && (
                <button
                    onClick={() => setIndex(i => clamp(i + 1))}
                    className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-md w-10 h-10 flex items-center justify-center text-3xl leading-none"
                    aria-label="Next"
                >
                    ›
                </button>
            )}
        </motion.div>
    );
}
