export default function Footer() {
    return (
        <footer className="bg-zinc-900 border-t border-zinc-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <p className="text-zinc-500 text-sm">
                            &copy; {new Date().getFullYear()} Hrituparno Chakraborty. All rights reserved.
                        </p>
                        <p className="text-zinc-600 text-xs mt-1">
                            Built with Next.js, Tailwind, and Python. Deployed on Vercel.
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="https://github.com/Hrituparno" className="text-zinc-500 hover:text-white transition-colors">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/hrituparno-chakkraborty-6a0353230/" className="text-zinc-500 hover:text-white transition-colors">
                            LinkedIn
                        </a>
                        <a href="mailto:hrituparno@example.com" className="text-zinc-500 hover:text-white transition-colors">
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
