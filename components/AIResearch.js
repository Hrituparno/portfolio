import { useState } from 'react';
import { Terminal, Send, Cpu, Loader2 } from 'lucide-react';

export default function AIResearch() {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [mode, setMode] = useState('summary'); // 'summary' | 'explain' | 'chat'

    const handleCommand = async () => {
        if (!query && mode !== 'summary') return;

        setLoading(true);
        setResponse(null);

        // Simulate API call delay for effect
        // In production, this would fetch from /api/summarize or /api/chat
        setTimeout(() => {
            let mockResponse = "";

            if (mode === 'summary') {
                mockResponse = "Based on the provided research context, Hrituparno focuses on Autonomous Multi-Agent Systems. His work involves creating agents that can autonomously ingest literature (arXiv), formulate hypotheses, and execute experiments. Key technologies include Gemini/GPT-4 for reasoning and vector databases for knowledge retrieval.";
            } else if (mode === 'explain') {
                mockResponse = `Analyzing project: "${query}"...\n\nThis project likely demonstrates the application of LLMs in a specific domain. If it's the "Research AI Agent", it models the scientific method computationally. If it's the "News Assistant", it showcases real-time information retrieval and synthesis.`;
            } else {
                mockResponse = `[AI Research Assistant]: That's an interesting question about "${query}". Hrituparno's approach typically involves decomposing complex tasks into sub-problems solvable by specialized agents.`;
            }

            setResponse(mockResponse);
            setLoading(false);
        }, 1500);
    };

    return (
        <section id="ai-interactive" className="py-24 bg-zinc-950 border-t border-zinc-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-full mb-4">
                        <Cpu className="text-blue-400 w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-zinc-100">Interactive Research Assistant</h2>
                    <p className="text-zinc-500 mt-4">
                        Ask my AI agent about my research, projects, or background.
                    </p>
                </div>

                <div className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-700 shadow-2xl">
                    {/* Terminal Header */}
                    <div className="bg-zinc-800 px-4 py-2 flex items-center space-x-2 border-b border-zinc-700">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-4 text-xs text-zinc-400 font-mono">research-agent — -bash — 80x24</span>
                    </div>

                    {/* Terminal Body */}
                    <div className="p-6 font-mono text-sm h-96 overflow-y-auto flex flex-col">
                        <div className="text-zinc-400 mb-4">
                            <span className="text-green-400">➜</span> <span className="text-blue-400">~</span> Welcome. Select a mode to query the research database.
                        </div>

                        {/* Mode Selection */}
                        <div className="flex space-x-2 mb-6">
                            <button
                                onClick={() => { setMode('summary'); setQuery(''); }}
                                className={`px-3 py-1 rounded border ${mode === 'summary' ? 'border-blue-500 text-blue-400 bg-blue-500/10' : 'border-zinc-700 text-zinc-500 hover:border-zinc-600'}`}
                            >
                                Summarize Profile
                            </button>
                            <button
                                onClick={() => { setMode('explain'); setQuery(''); }}
                                className={`px-3 py-1 rounded border ${mode === 'explain' ? 'border-blue-500 text-blue-400 bg-blue-500/10' : 'border-zinc-700 text-zinc-500 hover:border-zinc-600'}`}
                            >
                                Explain Project
                            </button>
                        </div>

                        {/* Input Area */}
                        {mode !== 'summary' && (
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="text-green-400">➜</span>
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder={mode === 'explain' ? "Enter project name..." : "Ask a question..."}
                                    className="bg-transparent border-none focus:ring-0 text-zinc-100 w-full outline-none"
                                    onKeyDown={(e) => e.key === 'Enter' && handleCommand()}
                                />
                            </div>
                        )}

                        {/* Response Area */}
                        {loading ? (
                            <div className="flex items-center text-zinc-400 mt-2">
                                <Loader2 className="animate-spin mr-2 w-4 h-4" /> Processing query...
                            </div>
                        ) : response && (
                            <div className="mt-2 p-3 bg-zinc-800/50 border border-zinc-700/50 rounded text-zinc-300 whitespace-pre-wrap animate-fade-in">
                                {response}
                            </div>
                        )}

                        {/* Execute Button for Summary Mode or general click */}
                        <div className="mt-auto pt-4 flex justify-end">
                            <button
                                onClick={handleCommand}
                                disabled={loading}
                                className="flex items-center px-4 py-2 bg-zinc-100 text-zinc-900 rounded hover:bg-white disabled:opacity-50 font-sans font-medium text-xs"
                            >
                                {loading ? "Running..." : "Run Command"}
                                {!loading && <Terminal className="ml-2 w-3 h-3" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
