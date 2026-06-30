import axios from 'axios';

// Kita kunci langsung URL-nya ke resource movies MockAPI kamu
const MOVIE_API_URL = "https://6a433f386dba791499aa58bb.mockapi.io/api/v1/movies";

// 1. Ambil semua data film (GET)
export const getMovies = async () => {
  try {
    const response = await axios.get(MOVIE_API_URL);
    return response.data;
  } catch (error) {
    console.error("Gagal mengambil data film:", error);
    throw error;
  }
};

// 2. Menambah film baru (POST)
export const addMovie = async (movieData) => {
  try {
    const response = await axios.post(MOVIE_API_URL, movieData);
    return response.data;
  } catch (error) {
    console.error("Gagal menambah data film:", error);
    throw error;
  }
};

// 3. Mengupdate data film (PUT)
export const updateMovie = async (id, updatedData) => {
  try {
    const response = await axios.put(`${MOVIE_API_URL}/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Gagal mengupdate data film:", error);
    throw error;
  }
};

// 4. Menghapus data film (DELETE)
export const deleteMovie = async (id) => {
  try {
    const response = await axios.delete(`${MOVIE_API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Gagal menghapus data film:", error);
    throw error;
  }
};