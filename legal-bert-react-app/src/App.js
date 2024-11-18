import React, { useState } from 'react';
import TextAnalyzer from './components/TextAnalyzer';
import Overview from './components/Overview';
import Research from './components/Research';
import TabNavigation from './components/TabNavigation';
import './index.css';

function App() {
    const [activeTab, setActiveTab] = useState('overview');

    const renderContent = () => {
        switch(activeTab) {
            case 'overview':
                return <Overview />;
            case 'tool':
                return <TextAnalyzer />;
            case 'research':
                return <Research />;
            default:
                return <Overview />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto p-8">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h1 className="text-3xl font-bold text-center mb-8">
                        Congressional Text Analysis
                    </h1>

                    <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

export default App;