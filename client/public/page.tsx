
import { SocialProof } from "../app/components/SocialProof";
import Hero from "../app/components/Hero";
import Navbar from "../app/components/Navbar";

export default function Page() {
  return (
    <main className="min-h-screen bg-glow">
      <Navbar />
      <Hero />
      <SocialProof />s
    </main>
  );
}
