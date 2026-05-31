import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="logo-section">
        <img src="/images/logo.png" alt="CHILL" className="logo-footer" />
        <p>@2023 Chill All Rights Reserved.</p>
      </div>
      <div className="genre-bantuan">
        <div className="genre-section">
          <div className="footer-header">
            <p>Genre</p>
            <img src="/images/chevron-right.png" alt="chevron" className="mobile-arrow" />
          </div>
          <div className="genre-lists">
            <ul className="genre-list">
              <li>Aksi</li>
              <li>Anak-anak</li>
              <li>Anime</li>
              <li>Britania</li>
            </ul>
            <ul className="genre-list">
              <li>Drama</li>
              <li>Fantasi Ilmiah & Fantasi</li>
              <li>Kejahatan</li>
              <li>KDrama</li>
            </ul>
            <ul className="genre-list">
              <li>Komedi</li>
              <li>Petualangan</li>
              <li>Perang</li>
              <li>Romantis</li>
            </ul>
            <ul className="genre-list">
              <li>Sains & Alam</li>
              <li>Thriller</li>
            </ul>
          </div>
        </div>

        <div className="bantuan-section">
          <div className="footer-header">
            <p>Bantuan</p>
            <img src="/images/chevron-right.png" alt="arrow" className="mobile-arrow" />
          </div>
          <ul className="bantuan-list">
            <li>FAQ</li>
            <li>Kontak Kami</li>
            <li>Privasi</li>
            <li>Syarat & Ketentuan</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;