'use client'
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { Customer } from "../types";

// Placeholders shown after the real customers until more logos are loaded in WordPress
const placeholders = [
    { name: 'Kunde 1', color: '#D32F2F' },
    { name: 'Kunde 2', color: '#1565C0' },
    { name: 'Kunde 3', color: '#2E7D32' },
    { name: 'Kunde 4', color: '#F9A825' },
    { name: 'Kunde 5', color: '#6A1B9A' },
    { name: 'Kunde 6', color: '#EF6C00' },
]

const MIN_ITEMS = 6

// Seconds the auto scroll takes to move through the whole list once
const LOOP_DURATION = 40

const cardClassName = "w-[240px] md:w-[320px] h-[110px] md:h-[135px] bg-white flex items-center justify-center"

const CustomerCard = ({ customer }: { customer: Customer }) => {
    const logo = customer.imageUrl
        ? <Image src={customer.imageUrl} alt={customer.title} fill sizes="320px" draggable={false} className="object-contain" />
        : <span className="font-semibold text-xl">{customer.title}</span>

    const content = <div className="relative w-3/4 h-3/4 flex items-center justify-center">{logo}</div>

    return customer.redirection
        ? <a href={customer.redirection} target="_blank" rel="noopener noreferrer" draggable={false} className={cardClassName}>{content}</a>
        : <div className={cardClassName}>{content}</div>
}

const Customers = ({ customers }: { customers: Customer[] }) => {
    const items = [
        ...customers.map((customer) => ({ type: 'customer' as const, customer })),
        ...placeholders
            .slice(0, Math.max(MIN_ITEMS - customers.length, 0))
            .map((placeholder) => ({ type: 'placeholder' as const, placeholder })),
    ]

    const trackRef = useRef<HTMLDivElement>(null)
    // Width of one copy of the list, the distance after which the loop repeats
    const loopWidth = useRef(0)
    const isDragging = useRef(false)
    const hasDragged = useRef(false)

    const baseX = useMotionValue(0)
    // Keeps the track between -loopWidth and 0 so it never runs out in either direction
    const x = useTransform(baseX, (value) => {
        const width = loopWidth.current
        return width ? ((value % width) - width) % width : 0
    })

    useEffect(() => {
        const track = trackRef.current
        if(!track) return

        const measure = () => { loopWidth.current = track.scrollWidth / 2 }
        measure()

        const observer = new ResizeObserver(measure)
        observer.observe(track)
        return () => observer.disconnect()
    }, [])

    useAnimationFrame((_, delta) => {
        if(isDragging.current || !loopWidth.current) return
        baseX.set(baseX.get() - (loopWidth.current / LOOP_DURATION) * (delta / 1000))
    })

    return(
        <div className="bg-[#89adcd] py-16 md:py-24">
            <div className="md:w-[1300px] mx-auto flex flex-col mb-8">
                <motion.h2
                    className="pl-6 md:pl-0 text-black"
                    initial={{opacity: 0, y: 15}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: .5, delay: .5}}
                    viewport={{once: true}}
                >
                    UNSERE KUNDEN
                </motion.h2>
            </div>
            <div className="relative overflow-hidden max-w-[1300px] mx-auto">
                {/* The list is rendered twice and wrapped at half its width, so the loop restarts seamlessly */}
                <motion.div
                    ref={trackRef}
                    className="flex w-max cursor-grab active:cursor-grabbing select-none"
                    style={{x, touchAction: 'pan-y'}}
                    onPointerDownCapture={() => { hasDragged.current = false }}
                    onPanStart={() => { isDragging.current = true; hasDragged.current = true }}
                    onPan={(_, info) => baseX.set(baseX.get() + info.delta.x)}
                    onPanEnd={() => { isDragging.current = false }}
                    // Avoids opening a customer link when the click was actually a drag
                    onClickCapture={(e) => { if(hasDragged.current) { e.preventDefault(); e.stopPropagation() } }}
                >
                    {[...items, ...items].map((item, index) => (
                        <div key={index} className="px-2 shrink-0" aria-hidden={index >= items.length}>
                            {
                                item.type === 'customer'
                                ? <CustomerCard customer={item.customer} />
                                : <div className={cardClassName}>
                                    <div
                                        className="w-3/4 h-1/2 flex items-center justify-center text-white font-semibold text-xl"
                                        style={{backgroundColor: item.placeholder.color}}
                                    >
                                        {item.placeholder.name}
                                    </div>
                                </div>
                            }
                        </div>
                    ))}
                </motion.div>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-[#89adcd] to-transparent"/>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-[#89adcd] to-transparent"/>
            </div>
        </div>
    )
}

export default Customers
