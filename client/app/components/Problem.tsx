"use client"
import { motion } from "framer-motion";
import { Card } from "../types";
import Image from "next/image";

const items: Card[] = [
    {
        card_id: "0",
        content: "Customer inquiries are answered late",
        icon: "/assets/clock-icon.svg",
    },
    {
        card_id: "1",
        content: "Sales and inventory are tracked manually",
        icon: "/assets/sales-icon.svg",
    },
    {
        card_id: "2",
        content: "Internal processes are slow and error-prone",
        icon: "/assets/exclamation-icon.svg",
    },
    {
        card_id: "3",
        content: "Social media execution is inconsistent",
        icon: "/assets/people-icon.svg",
    },
    {
        card_id: "4",
        content: "Business owners spend time on repetitive tasks instead of growth",
        icon: "/assets/people-icon.svg",
    },
    {
        card_id: "5",
        content: "Result: Lost leads, inefficiency, errors, and slower business growth",
        icon: "/assets/growth-icon.svg",
    },
];

export default function Problem() {
    return (
        <section className="relative flex flex-col justify-center text-center items-center my-[5em]
        gap-y-3 urbanist">
            <div className="md:w-[20vw] p-3 border-x-5 border-brand-orange text-white
            sm:w-[50vw] bg-brand-opaque-orange text-center">
                The Problem       
            </div>
            <div>
                <h1 className="text-3xl md:text-4xl md:px-[27vw] mx-3 my-5 text-white">
                    Many businesses lose opportunities not because of lack of demand,
                    but because their operations can't keep up.
                </h1>
            </div>
            <div className="slider flex my-8 gap-x-[1vw]">
                <motion.section className="track flex w-max overflow-x-hidden gap-x-[1vw]" initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                }}>
                    {
                        items.map((item) => (
                            <div key={item.card_id} className="flex-row bg-[#121212] flex py-[1em] px-[3vw] align-center 
                            justify-center border border-[#1e1e1e] rounded-lg">
                                <Image className="md:ms-[-1vw]" src={item.icon} alt={item.content} width={25} height={25} />
                                <p className="text-gradient-orange text-sm p-3">{item.content}</p>
                                <Image className="md:ms-[2vw] md:me-[-2vw]" src="/assets/ellipse-icon.svg" alt="ellipse" width={7} height={7} />
                            </div>
                        ))
                    }
                </motion.section>
                <motion.section className="track flex w-max overflow-x-hidden gap-x-[1vw]" initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 40,
                    ease: "linear",
                }}>
                    {
                        items.map((item) => (
                            <div key={item.card_id} className="flex-row bg-[#121212] flex py-[1em] px-[3vw] align-center 
                            justify-center border border-[#1e1e1e] rounded-lg">
                                <Image className="md:ms-[-1vw]" src={item.icon} alt={item.content} width={25} height={25} />
                                <p className="text-gradient-orange text-sm p-3">{item.content}</p>
                                <Image className="md:ms-[2vw] md:me-[-2vw]" src="/assets/ellipse-icon.svg" alt="ellipse" width={7} height={7} />
                            </div>
                        ))
                    }
                </motion.section>
            </div>
        </section>
    )
}