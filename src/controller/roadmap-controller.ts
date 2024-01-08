import { NavigateFunction } from "react-router-dom";

const handleSubmitRoadmap = async (e: React.FormEvent<HTMLFormElement>, navigate: NavigateFunction) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    // Convert FormData to a plain object
    const plainFormData: { [key: string]: string } = {};
    for (const [key, value] of formData.entries()) {
        plainFormData[key] = value as string;
    }

    const url = 'http://127.0.0.1:8000/process-data';
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(plainFormData),
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Result from backend:', result);
            navigate(`/results?param1=${result[0]}&param2=${result[1]}&param3=${result[2]}&param4=${result[3]}&param5=${result[4]}`);
        } else {
            throw new Error('Failed to fetch');
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle errors in your React component
    }
};

export { handleSubmitRoadmap };
