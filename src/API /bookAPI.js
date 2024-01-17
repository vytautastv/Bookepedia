import axios from "axios";

const API_URL = "https://www.googleapis.com/books/v1/volumes";

const fetchBooks = async (query) => {
    try {
        const response = await axios.get(`${API_URL}?q=${query}`);
        return response.data.items || []
    } catch (error) {
        console.error("Error fetching books:", error);
        throw error;
    }
};

export { fetchBooks };