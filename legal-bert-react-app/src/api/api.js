// api.js
export const analyzeLegalText = async (text) => {
    try {
        console.log('Making API request with text:', text);

        // Add error handling for empty text
        if (!text || text.trim() === '') {
            throw new Error('Please enter some text to analyze');
        }

        const response = await fetch('https://2h8ys8uplg.execute-api.us-east-1.amazonaws.com/prod/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Origin': window.location.origin  // Add this
            },
            body: JSON.stringify({ text }),
        });

        console.log('Response status:', response.status);
        const responseText = await response.text();
        console.log('Raw response:', responseText);

        let data;
        try {
            data = JSON.parse(responseText);
        } catch (e) {
            console.error('Failed to parse response as JSON:', e);
            throw new Error('Invalid response format from server');
        }

        if (!response.ok) {
            console.error('Error response:', data);
            throw new Error(data.error || data.message || 'Analysis failed');
        }

        const result = {
            prediction: data.prediction || "Unknown",
            confidence: data.confidence || 0,
        };

        console.log('Transformed response:', result);
        return result;

    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};