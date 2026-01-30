"use client";

function Navbar() {
  return (
    <header className="bg-gray-700/10 flex items-center justify-between mx-[8vw] my-8 px-6 py-6 border border-gray-700 rounded-3xl">
      <nav className="hidden md:flex gap-8 text-sm text-zinc-300 items-center justify-center">
        <div className="text-xl font-bold text-brand-orange">APEXED</div>
        <span>Home</span>
        <span>Services</span>
        <span>About</span>
      </nav>
        <section className="flex justify-between items-center gap-8 text-sm">
          <span className="text-white">Login</span>
          <button className="rounded-lg border border-brand-orange px-6 py-2 text-orange-500 hover-bg-brand-orange hover:text-white transition">
          Request Assessment
          </button>
        </section>
    </header>
  );
}

export default Navbar;