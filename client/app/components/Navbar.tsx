"use client";
import Image from "next/image";

function Navbar() {
  return (
    <header className="relative bg-gray-700/10 flex z-20 items-center justify-between urbanist mx-[8vw] my-8 px-4 py-3 border border-gray-700 rounded-3xl">
      <nav className="hidden md:flex gap-8 text-sm text-zinc-300 items-center justify-center">
        <div className="text-xl font-bold text-brand-orange">
          <Image src="/assets/images/apexed-logo.webp" width={80} height={80} alt="apexed-logo" />
        </div>
        <span>Home</span>
        <span>Services</span>
        <span>About</span>
      </nav>
        <section className="flex justify-between items-center gap-8 text-sm">
          <span className="text-white">Login</span>
          <button className="rounded-lg border border-brand-orange px-6 py-2 bg-brand-orange text-white
          hover-bg-brand-opaque-dark transition">
          Request Assessment
          </button>
        </section>
    </header>
  );
}

export default Navbar;