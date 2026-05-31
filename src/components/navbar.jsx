import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src="/images/logo.png" alt="Chill" className="logo-desktop" />
      <img src="/images/logo-icon.png" alt="CHILL" className="logo-mobile" />

      <div className="nav-menu">
        <p>Series</p>
        <p>Film</p>
        <p>Daftar Saya</p>
      </div>

      <div className="nav-profile">
        <img src="/images/profile.png" alt="Profile" className="profile" />
        <img src="/images/arrow-down.png" alt="arrow-down" className="arrow-down"/>

        <div className="arrow-down-section">
          <div className="profile-saya">
            <img src="/images/profil-icon.png" alt="profil-icon" />
            <p>Profil Saya</p>
          </div>
          <div className="ubah-premium">
            <img src="/images/star.png" alt="star" />
            <p>Ubah Premium</p>
          </div>
          <div className="keluar">
            <img src="/images/keluar-icon.png" alt="keluar-icon" />
            <p>Keluar</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;