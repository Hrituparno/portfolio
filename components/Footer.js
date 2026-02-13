export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0 text-center md:text-left">
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} Hrituparno Chakraborty. All rights reserved.
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                            Built with Next.js, Tailwind CSS & Framer Motion
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="https://github.com/Hrituparno" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/hrituparno-chakkraborty-6a0353230/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                            LinkedIn
                        </a>
                        <a href="mailto:hritupornochakraborty@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
