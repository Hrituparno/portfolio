import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Hrituparno Chakraborty | AI Research Engineer</title>
            </Head>
            <div className="bg-zinc-950 min-h-screen flex flex-col font-sans text-zinc-100 selection:bg-blue-500/30">
                <Navbar />
                <main className="flex-grow flex flex-col">{children}</main>
                <Footer />
            </div>
        </>
    );
}
