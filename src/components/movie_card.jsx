import React from 'react';

const MovieCard = ({ image, title, rating, badge, cardType = '1' }) => {
  // Menyesuaikan className sesuai dengan tipe card (card-1, card-2, dll) dari CSS kamu
  const cardClass = `movie-card-${cardType}`;

  return (
    <div className={cardClass}>
      <img src={image} alt={title || "Movie Poster"} />
      
      {/* Menampilkan badge "Episode Baru" atau "Top 10" jika ada */}
      {badge && (
        <span className={badge === "Top 10" ? "top-10" : "episode-baru"}>
          {badge}
        </span>
      )}

      {/* Menampilkan judul jika ada (khusus card tipe 1) */}
      {title && <p className="movie-title">{title}</p>}
      
      {/* Menampilkan rating jika ada */}
      {rating && (
        <div className="rating-info">
          <img src="/images/star.png" alt="star" />
          <span>{rating}</span>
        </div>
      )}
    </div>
  );
};

export default MovieCard;