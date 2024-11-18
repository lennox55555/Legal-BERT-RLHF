import React from 'react';

const Research = () => {
    const papers = [
        {
            title: "LEGAL-BERT: The Muppets straight out of Law School",
            authors: "Chalkidis et al.",
            year: 2020,
            description: "Introduces LEGAL-BERT, a BERT model pre-trained on legal text, demonstrating superior performance in legal NLP tasks compared to general-purpose language models.",
            link: "https://arxiv.org/abs/2010.02559",
            tags: ["BERT", "Legal NLP", "Transfer Learning"]
        },
        {
            title: "Congressional Bills Project",
            authors: "Adler and Wilkerson",
            year: 2021,
            description: "A comprehensive database of congressional bills and their classifications, providing a foundation for automated legislative text analysis.",
            link: "https://www.congressionalbills.org/",
            tags: ["Dataset", "Legislative Analysis"]
        },
        {
            title: "Automated Classification of Modes of Moral Reasoning in Judicial Decisions",
            authors: "Hausladen, Schubert, and Ash",
            year: 2020,
            description: "Demonstrates the application of natural language processing techniques to classify moral reasoning in legal texts.",
            link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3679265",
            tags: ["Legal Analysis", "Classification"]
        }
    ];

    return (
        <div className="prose max-w-none">

            <div className="space-y-8">
                {/* Introduction Section */}
                <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        About Our Research
                    </h3>
                    <p className="text-gray-600">
                        This tool is built upon cutting-edge research in legal text analysis and natural language processing.
                        Below are key papers and resources that form the foundation of our classification system.
                    </p>
                </section>

                {/* Papers Section */}
                <section className="space-y-4">
                    {papers.map((paper, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                    {paper.title}
                                </h3>
                                <span className="text-gray-500 text-sm">
                                    {paper.year}
                                </span>
                            </div>

                            <p className="text-gray-600 mb-2">
                                {paper.authors}
                            </p>

                            <p className="text-gray-700 mb-4">
                                {paper.description}
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="flex gap-2">
                                    {paper.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={paper.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                                >
                                    Read Paper
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Additional Resources */}
                <section className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Additional Resources
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Congressional Research Service Reports</li>
                        <li>Legal Language Processing Workshop Papers</li>
                        <li>Harvard Law School Case Studies</li>
                        <li>Stanford NLP Group Publications</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default Research;