const API_KEY = process.env.REACT_APP_RAPID_API_KEY;

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "X-RapidAPI-Key": API_KEY,
  },
};

export async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);
    if (response.status === 429) {
      throw new Error("Rate limit exceeded. Please try again later.");
    }
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("fetchData error:", error.message);
    throw error;
  }
}
