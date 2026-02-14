import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ProfileHero from '../components/ProfileHero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import AIResearch from '../components/AIResearch';
import RetroGame from '../components/RetroGame';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <Layout>
            <Hero />
            <ProfileHero />
            <RetroGame />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <AIResearch />
            <Contact />
        </Layout>
    );
}
