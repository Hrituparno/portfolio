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
            </Head>
            <div className="bg-white min-h-screen flex flex-col font-sans text-gray-900 selection:bg-indigo-100">
                <Navbar />
                <main className="flex-grow flex flex-col">{children}</main>
                <Footer />
            </div>
        </>
    );
}
