import TextAnalyzer from './components/TextAnalyzer';
import './index.css';

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto p-8">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <TextAnalyzer />
                </div>
            </div>
        </div>
    );
}

export default App;