import React from 'react';
import '../styles/home.css';
// Mengimpor semua komponen pendukung yang sudah kita buat
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import MovieCard from '../components/movie_card';

const Home = () => {
  return (
    <div>
      {/* MENAMPILKAN NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <div className="hero-section">
        <img src="/images/duty-after-school.png" alt="Duty After School" className="hero-bg" />
        <div className="hero-content">
          <h1>Duty After School</h1>
          <p>Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.</p>

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

      {/* SLIDER 1: MELANJUTKAN TONTON FILM */}
      <div className="card-1">
        <div className="section-header">
          <h2>Melanjutkan Tonton Film</h2>
        </div>
        <div className="slider-wrapper">
          <img src="/images/arrow-left-icon.png" alt="arrow-left" className="arrow-left-icon" />
          <div className="movie-slider-1">
            <MovieCard image="/images/dont-look-up.png" title="Don't Look Up" rating="4.5/5" cardType="1" />
            <MovieCard image="/images/aouad.png" title="The Batman" rating="4.2/5" cardType="1" />
            <MovieCard image="/images/bluelock.png" title="Blue Lock" rating="4.6/5" cardType="1" />
            <MovieCard image="/images/a-man-called-otto.png" title="A Man Called Otto" rating="4.4/5" cardType="1" />
          </div>
          <img src="/images/arrow-left-icon.png" alt="arrow-right" className="arrow-right-icon" />
        </div>
      </div>

      {/* SLIDER 2: TOP RATING FILM */}
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

      {/* SLIDER 3: FILM TRENDING */}
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

      {/* SLIDER 4: RILIS BARU */}
      <div className="card-4">
        <div className="section-header">
          <h2>Rilis Baru</h2>
        </div>
        <div className="slider-wrapper">
          <img src="/images/arrow-left-icon.png" alt="arrow-left" className="arrow-left-icon" />
          <div className="movie-slider-4">
            <MovieCard image="/images/the-little-mermaid.png" badge="Top 10" cardType="4" />
            <MovieCard image="/images/dus.png" badge="Episode Baru" cardType="4" />
            <MovieCard image="/images/big-hero.png" badge="Top 10" cardType="4" />
            <MovieCard image="/images/aouad-second.png" badge="Episode Baru" cardType="4" />
            <MovieCard image="/images/missing.png" cardType="4" />
          </div>
          <img src="/images/arrow-left-icon.png" alt="arrow-right" className="arrow-right-icon" />
        </div>
      </div>

      {/* MENAMPILKAN FOOTER */}
      <Footer />
    </div>
  );
};

export default Home;