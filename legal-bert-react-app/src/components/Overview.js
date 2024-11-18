import React from 'react';

const Overview = () => {
    return (
        <div className="prose max-w-none">
            <div className="space-y-6 text-gray-600">
                <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        About This Tool
                    </h3>
                    <p className="mb-4">
                        The Congressional Text Analysis Tool uses advanced machine learning to analyze and categorize legislative and policy-related text. Built on a foundation of legal-specialized BERT models, it can accurately classify text into various congressional policy areas.
                    </p>
                    <p>
                        This tool is designed to help researchers, legal professionals, and policy analysts quickly understand the primary policy focus of legislative texts, amendments, and policy documents.
                    </p>
                </section>

                <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        How It Works
                    </h3>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>Input your legislative or policy text into the analysis tool</li>
                        <li>Our AI model processes and analyzes the content</li>
                        <li>Receive a classification with confidence score</li>
                        <li>Use the results to better understand policy focus areas</li>
                    </ol>
                </section>

                <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Key Features
                    </h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Specialized legal language understanding</li>
                        <li>32 distinct policy area classifications</li>
                        <li>Confidence scoring for reliability</li>
                        <li>Fast, real-time analysis</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Overview;