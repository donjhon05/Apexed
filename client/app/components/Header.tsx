export default function Header() {
    return (
        <section className="flex flex-col justify-center text-center items-center my-[5em]
        gap-y-3">
            <div className="md:w-[20vw] flex-initial p-3 border border-brand-orange text-white rounded-full bg-brand-opaque-orange
            sm:w-[50vw]">
                <span>
                    AI-Powered Business Automation        
                </span>
            </div>
            <div>
                <h1 className="text-3xl md:text-6xl font-semibold mt-4 mt-2 text-white">Automation that works
                    <span className="italic text-brand-orange italic-serif-semibold"><h1>from day one</h1></span>
                    to every day after.
                </h1>
            </div>
            <div className="px-4">
                <p className="mt-8 md:mx-[30vw] text-white">Save time. Reduce errors. Eliminate repetitive work, and scale operations without
                    building your own automation team.
                </p>
            </div>
        </section>
    )
}