import React, { useState } from 'react';
import { analyzeLegalText } from '../api/api';
import ResultDisplay from './ResultDisplay';
import ExampleSidebar from './ExampleSidebar';

const TextAnalyzer = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleAnalyze = async (textToAnalyze) => {
        setLoading(true);
        setError(null);

        try {
            const analysisResult = await analyzeLegalText(textToAnalyze);
            setResult(analysisResult);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleExampleSelect = async (exampleText) => {
        setText(exampleText);
        setIsSidebarOpen(false);
        handleAnalyze(exampleText);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            handleAnalyze(text);
        }
    };

    return (
        <div>
            <div className="relative mb-6">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full h-40 p-4 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Enter legislative or policy text for analysis..."
                />

                {!text.trim() && (
                    <div
                        onClick={() => setIsSidebarOpen(true)}
                        className="absolute right-0 top-0 transform translate-x-[calc(100%+1rem)] bg-yellow-100 p-3 rounded-lg shadow-sm cursor-pointer hover:-translate-y-1 transition-transform duration-200 w-64"
                    >
                        <div className="flex items-center space-x-2">
                            <svg className="w-5 h-5 text-yellow-700 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-yellow-700 font-medium">
                                Need an example? Click here!
                            </span>
                        </div>
                    </div>
                )}
            </div>

            <button
                onClick={handleSubmit}
                disabled={loading || !text.trim()}
                className="w-full py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors disabled:bg-blue-300"
            >
                {loading ? 'Analyzing...' : 'Analyze Text'}
            </button>

            {error && (
                <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-lg">
                    {error}
                </div>
            )}

            {result && <ResultDisplay result={result} />}

            <ExampleSidebar
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
                onSelectExample={handleExampleSelect}
            />
        </div>
    );
};

export default TextAnalyzer;