import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/home.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import MovieCard from '../components/movie_card';
import { getMovies, addMovie, updateMovie, deleteMovie } from '../services/api/movies';

const Home = () => {
  const [daftarFilm, setDaftarFilm] = useState([]);

  const [inputJudul, setInputJudul] = useState('');
  const [inputRating, setInputRating] = useState('');
  const [inputImage, setInputImage] = useState('/images/aouad.png'); 
  
  const [idFilmDiedit, setIdFilmDiedit] = useState(null);

  const muatDataFilm = async () => {
    try {
      const data = await getMovies();
      setDaftarFilm(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Gagal mengambil data film:", error);
      
      try {
        const response = await axios.get("https://6a433f386dba791499aa58bb.mockapi.io/api/v1/movies");
        setDaftarFilm(Array.isArray(response.data) ? response.data : []);
      } catch (err) {
        setDaftarFilm([]);
      }
    }
  };

  useEffect(() => {
    muatDataFilm();
  }, []);

  const simpanFilm = async (e) => {
    e.preventDefault();
    if (!inputJudul || !inputRating) return alert('Silakan isi judul dan rating terlebih dahulu!');

    const payloadFilm = {
      title: inputJudul,
      rating: inputRating,
      image: inputImage,
      category: "Film" 
    };

    try {
      if (idFilmDiedit !== null) {
        // Proses UPDATE ke API
        await updateMovie(idFilmDiedit, payloadFilm);
        setIdFilmDiedit(null);
      } else {
        // Proses CREATE ke API
        await addMovie(payloadFilm);
      }
      
      muatDataFilm();

      setInputJudul('');
      setInputRating('');
      setInputImage('/images/aouad.png');
    } catch (error) {
      alert("Gagal menyimpan data ke server.");
    }
  };

  const pemicuEdit = (film) => {
    setIdFilmDiedit(film.id);
    setInputJudul(film.title);
    setInputRating(film.rating);
    setInputImage(film.image);
  };

  const hapusFilm = async (id) => {
    if (confirm('Apakah Anda benar ingin menghapus film ini?')) {
      try {
        await deleteMovie(id);
        muatDataFilm();
      } catch (error) {
        alert("Gagal menghapus data dari server.");
      }
    }
  };

  return (
    <div>
      <Navbar />
      
      <div className="hero-section">
        <img src="/images/duty-after-school.png" alt="Duty After School" className="hero-bg" />
        <div className="hero-content">
          <h1>Duty After School</h1>
          <p>Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai recruitment tentara, termasuk siswa sekolah menengah.</p>
          <div className="hero-content-button">
            <button className="btn-mulai">Mulai</button>
            <button className="btn-selengkapnya">
              <img src="/images/information-outline.png" alt="information-outline" />
              Selengkapnya
            </button>
            <span className="age-rating">18+</span>
            <img src="/images/volume-off.png" alt="volume-off" className="volume-off" />
          </div>
        </div>
      </div>

      <div className="card-1">
        <div className="section-header">
          <h2>Melanjutkan Tonton Film</h2>
        </div>
        <div className="slider-wrapper">
          <img src="/images/arrow-left-icon.png" alt="arrow-left" className="arrow-left-icon" />
          <div className="movie-slider-1">
            {daftarFilm.map((film) => (
              <MovieCard key={film.id} image={film.image} title={film.title} rating={film.rating} cardType="1" />
            ))}
          </div>
          <img src="/images/arrow-left-icon.png" alt="arrow-right" className="arrow-right-icon" />
        </div>
      </div>

      <div className="card-2">
        <div className="section-header">
          <h2>Top Rating Film dan Series Hari Ini</h2>
        </div>
        <div className="slider-wrapper">
          <img src="/images/arrow-left-icon.png" alt="arrow-left" className="arrow-left-icon" />
          <div className="movie-slider-2">
            <MovieCard image="/images/suzume.png" badge="Episode Baru" cardType="2" />
            <MovieCard image="/images/jurassic-world.png" cardType="2" />
            <MovieCard image="/images/sonic.png" cardType="2" />
            <MovieCard image="/images/aouad-second.png" badge="Episode Baru" cardType="2" />
            <MovieCard image="/images/big-hero.png" badge="Top 10" cardType="2" />
          </div>
          <img src="/images/arrow-left-icon.png" alt="arrow-right" className="arrow-right-icon" />
        </div>
      </div>

      <div className="card-3">
        <div className="section-header">
          <h2>Film Trending</h2>
        </div>
        <div className="slider-wrapper">
          <img src="/images/arrow-left-icon.png" alt="arrow-left" className="arrow-left-icon" />
          <div className="movie-slider-3">
            <MovieCard image="/images/the-tomorrow-war.png" badge="Top 10" cardType="3" />
            <MovieCard image="/images/quantumania.png" badge="Top 10" cardType="3" />
            <MovieCard image="/images/guardians-of-the-galaxy.png" badge="Top 10" cardType="3" />
            <MovieCard image="/images/a-man-called-otto.png" badge="Top 10" cardType="3" />
            <MovieCard image="/images/the-little-mermaid.png" badge="Top 10" cardType="3" />
          </div>
          <img src="/images/arrow-left-icon.png" alt="arrow-right" className="arrow-right-icon" />
        </div>
      </div>

      <div className="crud-container-baru">
        <h2 className="crud-judul-baru">Kelola Data Film (CRUD)</h2>
        
        <div className="crud-konten-wrapper">
          <form onSubmit={simpanFilm} className="crud-form-kiri">
            <input 
              type="text" 
              placeholder="Judul Film" 
              value={inputJudul}
              onChange={(e) => setInputJudul(e.target.value)}
              className="crud-input-field"
            />
            <input 
              type="text" 
              placeholder="Rating (contoh: 4.5/5)" 
              value={inputRating}
              onChange={(e) => setInputRating(e.target.value)}
              className="crud-input-field"
            />
            <select 
              value={inputImage}
              onChange={(e) => setInputImage(e.target.value)}
              className="crud-select-field"
            >
              <option value="/images/dont-look-up.png">Don't Look Up Image</option>
              <option value="/images/aouad.png">The Batman Image</option>
              <option value="/images/bluelock.png">Blue Lock Image</option>
              <option value="/images/aouad.png">Default Image</option>
            </select>
            <button type="submit" className="crud-btn-submit">
              {idFilmDiedit !== null ? 'Simpan Perubahan' : 'Tambah Film (+)'}
            </button>
          </form>

          <div className="crud-tabel-kanan">
            <table className="tabel-film-baru">
              <thead>
                <tr>
                  <th>Poster</th>
                  <th>Judul Film</th>
                  <th>Rating</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {daftarFilm.map((film) => (
                  <tr key={film.id}>
                    <td>
                      <img src={film.image} alt={film.title} className="poster-mini" />
                    </td>
                    <td className="judul-bold">{film.title}</td> 
                    <td className="rating-star">{film.rating}</td>
                    <td>
                      <button onClick={() => pemicuEdit(film)} className="btn-edit-kecil">Edit</button>
                      <button onClick={() => hapusFilm(film.id)} className="btn-hapus-kecil">Hapus</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;