import React from 'react';

const ExampleSidebar = ({ isOpen, onClose, onSelectExample }) => {
    const examples = [
        {
            title: "H.R. 3355 - Violent Crime Control Act",
            text: `SEC. 1. SHORT TITLE.
            This Act may be cited as the "Violent Crime Control and Law Enforcement Act of 1994".
            SEC. 2. FINDINGS.
            Congress finds that—
            (1) crime, particularly violent crime, is a pervasive, nationwide problem;
            (2) crime problems are exacerbated by the lack of effective law enforcement, criminal justice, and correctional facilities and services;
            (3) current Federal assistance programs do not provide sufficient support to meet State and local needs; and
            (4) coordinated law enforcement and criminal justice strategies, developed with community participation, are critical to reducing violent crime and creating safer communities.`
        },
        {
            title: "Clean Air Act Amendment",
            text: `SECTION 1. SHORT TITLE AND TABLE OF CONTENTS.
            (a) Short Title.—This Act may be cited as the "Clean Air Act Amendments of 1990".
            (b) Table of Contents.—
            TITLE I—PROVISIONS FOR ATTAINMENT AND MAINTENANCE OF NATIONAL AMBIENT AIR QUALITY STANDARDS
            Sec. 101. Additional provisions for nonattainment areas.
            Sec. 102. Provisions for attainment and maintenance of national ambient air quality standards.`
        }
    ];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-y-0 right-0 w-96 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50">
            <div className="h-full overflow-y-auto p-6">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold">Example Texts</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="space-y-4">
                    {examples.map((example, index) => (
                        <div
                            key={index}
                            className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                            onClick={() => onSelectExample(example.text)}
                        >
                            <h4 className="font-medium mb-2">{example.title}</h4>
                            <p className="text-sm text-gray-600 overflow-hidden line-clamp-3">{example.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExampleSidebar;