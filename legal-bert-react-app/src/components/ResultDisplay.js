import React from 'react';

const ResultDisplay = ({ result }) => {
    if (!result) return null;

    // Format confidence as percentage
    const confidencePercentage = (result.confidence * 100).toFixed(2);

    // Get confidence color classes
    const getConfidenceColor = (confidence) => {
        const conf = confidence * 100;
        if (conf >= 80) return 'bg-green-100 text-green-800 border-green-500';
        if (conf >= 50) return 'bg-blue-100 text-blue-800 border-blue-500';
        return 'bg-yellow-100 text-yellow-800 border-yellow-500';
    };

    // Get progress bar color
    const getProgressBarColor = (confidence) => {
        const conf = confidence * 100;
        if (conf >= 80) return 'bg-green-500';
        if (conf >= 50) return 'bg-blue-500';
        return 'bg-yellow-500';
    };

    return (
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Analysis Result
            </h2>

            <div className={`rounded-lg border-l-4 p-6 ${getConfidenceColor(result.confidence)}`}>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold">
                        {result.prediction}
                    </h3>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-white shadow-sm">
                        {confidencePercentage}% Confidence
                    </span>
                </div>

                <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                        className={`h-full rounded-full transition-all duration-500 ${getProgressBarColor(result.confidence)}`}
                        style={{ width: `${confidencePercentage}%` }}
                    />
                </div>
            </div>

            <div className="mt-6 text-sm text-gray-500 flex justify-between items-center px-2">
                <span>AI Confidence Score: {confidencePercentage}%</span>
                <span>• Classification Complete •</span>
            </div>
        </div>
    );
};

export default ResultDisplay;