export const generateImageFromBackend = async (prompt) => {
	try {
		const response = await fetch("http://localhost:3001/generate-image", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ prompt }),
		});

		if (!response.ok) {
			throw new Error("Failed to generate image");
		}

		const data = await response.json();
		return data.imageUrl;
	} catch (error) {
		console.error("Error generating image:", error);
		throw error;
	}
};
