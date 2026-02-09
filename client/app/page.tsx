import Navbar from "./components/Navbar"
// Note: Un-comment if workflow card is needed
// import Hero from "./components/Hero"
import Header from "./components/Header"
import GlowEffects from "./components/GlowEffects"
import BlobEffects from "./components/BlobEffects"
import Problem from "./components/Problem"

export default function Home() {
    return (
        <main>
            <GlowEffects />
            <BlobEffects />
            <Navbar />
            <Header />
            <Problem />
        </main>
    )
}