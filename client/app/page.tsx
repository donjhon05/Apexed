import Navbar from "./components/Navbar"
import Solution from "./components/Solution"
import Header from "./components/Header"
import GlowEffects from "./components/GlowEffects"
import BlobEffects from "./components/BlobEffects"
import Problem from "./components/Problem"

export default function Home() {
    return (
        <main className="overflow-x-hidden">
            <GlowEffects />
            <BlobEffects />
            <Navbar />
            <Header />
            <Problem />
            <Solution />
        </main>
    )
}