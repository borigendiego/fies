'use client'
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

const cardClassName = "w-[240px] md:w-[320px] h-[110px] md:h-[135px] border border-gray-200 flex items-center justify-center"

const CustomerCard = ({ customer }: { customer: Customer }) => {
    const logo = customer.imageUrl
        ? <Image src={customer.imageUrl} alt={customer.title} fill sizes="320px" className="object-contain" />
        : <span className="font-semibold text-xl">{customer.title}</span>

    const content = <div className="relative w-3/4 h-3/4 flex items-center justify-center">{logo}</div>

    return customer.redirection
        ? <a href={customer.redirection} target="_blank" rel="noopener noreferrer" className={cardClassName}>{content}</a>
        : <div className={cardClassName}>{content}</div>
}

const Customers = ({ customers }: { customers: Customer[] }) => {
    const items = [
        ...customers.map((customer) => ({ type: 'customer' as const, customer })),
        ...placeholders
            .slice(0, Math.max(MIN_ITEMS - customers.length, 0))
            .map((placeholder) => ({ type: 'placeholder' as const, placeholder })),
    ]

    return(
        <div className="bg-white pt-4 pb-32 md:pb-32 md:pt-16">
            <div className="md:w-[1300px] mx-auto flex flex-col mb-12 md:mb-16">
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
                {/* The list is rendered twice and moved by -50%, so the loop restarts seamlessly */}
                <motion.div
                    className="flex w-max"
                    animate={{x: ['0%', '-50%']}}
                    transition={{duration: 40, ease: 'linear', repeat: Infinity}}
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
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-48 bg-gradient-to-r from-white to-transparent"/>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-48 bg-gradient-to-l from-white to-transparent"/>
            </div>
        </div>
    )
}

export default Customers
