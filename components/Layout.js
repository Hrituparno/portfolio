import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Hrituparno Chakraborty | AI Research Engineer</title>
                <meta name="description" content="AI Research Engineer specializing in Autonomous Multi-Agent Systems and LLM Micro-Architectures" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            </Head>
            <div className="min-h-screen flex flex-col font-sans selection:bg-cyan-400/30" style={{ background: '#0a0a14', color: '#e0e0ff' }}>
                <Navbar />
                <main className="flex-grow flex flex-col relative">{children}</main>
                <Footer />
            </div>
        </>
    );
}
