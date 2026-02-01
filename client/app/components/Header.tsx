import Image from "next/image"

export default function Header() {
    return (
        <section className="relative flex flex-col justify-center text-center items-center my-[5em]
        gap-y-3 urbanist">
            <div className="md:w-[20vw] flex flex-row p-3 border border-brand-orange text-white rounded-full
            sm:w-[50vw] bg-brand-opaque-orange">
                <Image src="/assets/orb.svg" alt="orb" width={25} height={25} />
                <span>
                    AI-Powered Business Automation        
                </span>
            </div>
            <div>
                <h1 className="text-3xl md:text-6xl mt-4 mt-2 text-white">Automation that works <br />
                    <span className="italic text-brand-orange italic-serif-semibold">from day one </span>
                    to every <br /> day after.
                </h1>
            </div>
            <div className="px-4">
                <p className="mt-8 md:mx-[30vw] text-white">Save time. Reduce errors. Eliminate repetitive work, and scale operations without
                    building your own automation team.
                </p>
            </div>
            <div className="md:flex-row">
                <button className="rounded-lg border border-brand-orange px-6 py-3 bg-brand-orange text-white
                hover-bg-brand-opaque-dark transition mx-3 my-3">
                    See AI Automation in Action
                </button>
                <button className="rounded-lg border border-brand-orange px-6 py-3 bg-black text-white
                hover-bg-brand-orange transition mx-3 my-3">
                    Start Your Free Trial
                </button>
            </div>
        </section>
    )
}