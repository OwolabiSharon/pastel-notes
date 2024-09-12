import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"; // Assuming you're using NEXT_PUBLIC environment variable for the backend URL

// Create a new note
export const createNote = async (title: string, content: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/notes`, {
      title,
      content,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating note:", error);
    throw error;
  }
};

// Get all notes
export const getAllNotes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/notes`);
    return response.data;
  } catch (error) {
    console.error("Error fetching notes:", error);
    throw error;
  }
};

// Update a note
export const updateNote = async (id: string, title: string, content: string) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/api/notes/${id}`, {
      title,
      content,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating note:", error);
    throw error;
  }
};

// Delete a note
export const deleteNote = async (id: string) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/api/notes/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting note:", error);
    throw error;
  }
};
