"use client";



function Navbar() {
  return (
    <header className="flex items-center justify-between px-10 py-6">
      <div className="text-xl font-bold text-brand-orange">APEXED</div>
      <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
        <span>Home</span>
        <span>About Us</span>
        <span>Ghost Zone</span>
        <span>Terms</span>
        <span>FAQ</span>
      </nav>
      <button className="rounded-full border border-brand-orange px-6 py-2 text-brand-orange hover:bg-brand-orange hover:text-black transition">
        Request Assessment
      </button>
    </header>
  );
}

export default Navbar;