import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ProfileHero from '../components/ProfileHero';
import RetroGameNew from '../components/RetroGameNew';

export default function Home() {
    return (
        <Layout>
            <Hero />
            <ProfileHero />
            <RetroGameNew />
        </Layout>
    );
}
