"use client"
import Image from "next/image"
import { packages } from "../package-inclusions"

export default function Packages() {
    return (
        <section className="relative flex flex-col justify-center text-center items-center my-[5em]
        gap-y-3 urbanist">
            <div className="md:w-[10vw] p-3 border-x-5 border-brand-orange text-white
            sm:w-[50vw] bg-brand-opaque-orange text-center">
                    Packages        
            </div>
            <div>
                <h1 className="text-3xl md:text-6xl mt-4 mt-2 text-gradient-orange">
                    Workflow Packages
                </h1>
                <span className="flex justify-center text-center my-5 px-3">
                    <p className="text-sm text-white">
                        After choosing a service category, select how many workflows you want automated.
                    </p>
                </span>
            </div>
                
            <div className="flex flex-col md:flex-row justify-center gap-y-5 my-[2em] md:mx-[5vw] text-start z-20">

                <div className="py-3 px-[2vw] mx-[3vw] bg-[#121212] border border-[#1e1e1e] rounded-lg">
                    <p className="text-gradient-orange rounded-lg inline-block px-5 font-medium text-center text-lg p-2 border border-[#1e1e1e] my-3">Basic</p>
                    <span>
                        <h3 className="text-white text-lg font-medium py-3">$446 /month</h3>
                        <p className="text-[#929292] py-3">Essential automation to get your workflows up and running fast.</p>
                    </span>
                    <div className="flex flex-col self-center">
                        <button className="flex flex-col glass-button rounded-lg px-6 py-3 text-white 
                        gradient-border transition text-center">
                            Get Started
                        </button>
                    </div>
                    <span>
                        <h3 className="text-white text-lg font-medium py-3">What's included:</h3>
                        {packages.filter((item) => item.type === "basic").map((item) => (
                            <span key={item.package_id} className="text-[#929292] py-3 text-wrap flex flex-row">
                                <Image className="p-3 border border-[#1e1e1e]" src="/assets/checkmark.svg" alt="checkmark" width={40} height={40} />
                                <p className="px-3">{item.content}</p>
                            </span>
                        ))}
                    </span>
                </div>
                <div className="py-3 px-[2vw] mx-[3vw] bg-[#121212] border border-[#1e1e1e] rounded-lg">
                    <p className="text-gradient-orange rounded-lg inline-block px-5 font-medium text-center text-lg p-2 border border-[#1e1e1e] my-3">Standard</p>
                    <span>
                        <Image src="/assets/light-ray.svg" className="absolute rounded-lg md:top-[15em] top-[14.7em] md:left-[45.5vw] left-[28vw]" alt="light-ray-effect" width={250} height={250} />
                        <h3 className="text-white text-lg font-medium py-3">$500 /month</h3>
                        <p className="text-[#929292] py-3">Advanced automation with custom workflows and integrations.</p>
                    </span>
                    <div className="flex flex-col">    
                        <button className="flex flex-col glass-button rounded-lg px-6 py-3 text-white 
                        gradient-border transition">
                            Get Started
                        </button>
                    </div>
                    <span className="flex flex-col">
                        <h3 className="text-white text-lg font-medium py-3">What's included:</h3>
                        {packages.filter((item) => item.type === "standard").map((item) => (
                            <span key={item.package_id} className="text-[#929292] py-3 text-wrap flex flex-row">
                                <Image className="p-3 border border-[#1e1e1e]" src="/assets/checkmark.svg" alt="checkmark" width={40} height={40} />
                                <p className="px-3">{item.content}</p>
                            </span>
                        ))}
                    </span>
                </div>
                <div className="py-3 px-[2vw] mx-[3vw] bg-[#121212] border border-[#1e1e1e] rounded-lg">
                    <p className="text-gradient-orange rounded-lg inline-block px-5 font-medium text-center text-lg p-2 border border-[#1e1e1e] my-3">Enterprise</p>
                    <span>
                        <h3 className="text-white text-lg font-medium py-3">$1,199 /month</h3>
                        <p className="text-[#929292] py-3">Fully customied automation built for complex business needs.</p>
                    </span>
                    <div className="flex flex-col">
                        <button className="flex flex-col glass-button rounded-lg px-6 py-3 text-white 
                        gradient-border transition text-center">
                            Get Started
                        </button>
                    </div>
                    <span>
                        <h3 className="text-white text-lg font-medium py-3">What's included:</h3>
                        {packages.filter((item) => item.type === "enterprise").map((item) => (
                            <span key={item.package_id} className="text-[#929292] py-3 text-wrap flex flex-row">
                                <Image className="p-3 border border-[#1e1e1e]" src="/assets/checkmark.svg" alt="checkmark" width={40} height={40} />
                                <p className="px-3">{item.content}</p>
                            </span>
                        ))}
                    </span>
                </div>
            </div>
        </section>
    )
}