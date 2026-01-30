import WorkflowCard from "./WorkflowCard"

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 px-10 py-24 mx-[3vw] items-center">
      <div>
        <div className="inline-block mb-6 rounded-full border border-brand-orange px-4 py-1 text-xs text-brand-orange">
          AI Automation · Workflow Orchestration · Intelligent Systems
        </div>

        <h1 className="text-5xl lg:text-6xl text-white font-extrabold leading-tight">
          Automate your <br /> business workflows <br /> in <span className="italic text-brand-orange">minutes</span>, not hours.
        </h1>

        <p className="mt-6 max-w-xl text-zinc-400">
          Build intelligent AI systems that eliminate repetitive work, reduce errors, and scale operations automatically.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-full bg-brand-orange px-8 py-3 text-black font-medium shadow-soft">
            Get Your Free Automation Audit
          </button>
          <button className="rounded-full border border-zinc-700 px-8 py-3 text-white">
            See It in Action
          </button>
        </div>
      </div>

      <WorkflowCard />
    </section>
  );
}


export default Hero;