import React from 'react';

const TabNavigation = ({ activeTab, setActiveTab }) => {
    return (
        <div className="mb-8 border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                <button
                    onClick={() => setActiveTab('overview')}
                    className={`${
                        activeTab === 'overview'
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg`}
                >
                    Overview
                </button>
                <button
                    onClick={() => setActiveTab('tool')}
                    className={`${
                        activeTab === 'tool'
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg`}
                >
                    Tool
                </button>
                <button
                    onClick={() => setActiveTab('research')}
                    className={`${
                        activeTab === 'research'
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg`}
                >
                    Research
                </button>
            </nav>
        </div>
    );
};

export default TabNavigation;