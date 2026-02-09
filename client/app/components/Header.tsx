"use client"
import Image from "next/image"

export default function Header() {
    return (
        <section className="relative flex flex-col justify-center text-center items-center my-[5em]
        gap-y-3 urbanist">
            <div className="md:w-[20vw] p-3 border-x-5 border-brand-orange text-white
            sm:w-[50vw] bg-brand-opaque-orange text-center">
                    Intelligent AI Automation        
            </div>
            <div>
                <h1 className="text-3xl md:text-6xl mt-4 mt-2 text-white">Effortless Business Operations <br />
                    <span className="text-gradient-orange">Powered by </span>
                    Intelligent AI <br /> Automation
                </h1>
            </div>
            <div className="px-4">
                <p className="mt-8 md:mx-[25vw] text-white">We help businesses eliminate
                    manual work, respond faster, and operate smarter <br />
                    through tailored AI automation solutions by <span className="text-brand-orange"> Apexed AI</span>.
                </p>
            </div>
            <div className="md:flex-col">
                <button className="rounded-lg border border-brand-orange bottom-orange-shadow px-6 py-3 bg-brand-orange text-white
                hover-bg-brand-opaque-dark transition mx-3 my-3">
                    See AI Automation in Action
                </button>
            </div>
            <div className="flex flex-col my-5">
                <section className="flex flex-row">
                    <Image src="/assets/images/sky.webp" alt="sky" width={50} height={50} className="border-2 
                    border-white rounded-full mx-[-5px]" />
                    <Image src="/assets/images/dave.webp" alt="dave" width={50} height={50} className="border-2 
                    border-white rounded-full mx-[-5px]" />
                    <Image src="/assets/images/ajay.webp" alt="ajay" width={50} height={50} className="border-2 
                    border-white rounded-full mx-[-5px]" />
                    <Image src="/assets/images/sjay.webp" alt="sjay" width={50} height={50} className="border-2 
                    border-white rounded-full mx-[-5px]" />
                    <Image src="/assets/images/lance.webp" alt="lance" width={50} height={50} className="border-2 
                    border-white rounded-full mx-[-5px]" />
                    <Image src="/assets/images/tim.webp" alt="tim" width={50} height={50} className="border-2 
                    border-white rounded-full mx-[-5px]" />
                </section>
                <span>
                    <p className="text-white my-5 text-center">Helping startups build better</p>
                </span>
            </div>
        </section>
    )
}