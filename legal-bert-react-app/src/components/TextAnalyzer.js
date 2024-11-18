import React, { useState } from 'react';
import { analyzeLegalText } from '../api/api';
import ResultDisplay from './ResultDisplay';

const TextAnalyzer = () => {
    const [text, setText] = useState('');
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        setLoading(true);
        setError(null);

        try {
            const analysisResult = await analyzeLegalText(text);
            setResult(analysisResult);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-center mb-8">
                Congressional Text Analysis
            </h1>

            <div className="mb-6">
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full h-40 p-4 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Enter text for analysis..."
                />
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
        </div>
    );
};

export default TextAnalyzer;