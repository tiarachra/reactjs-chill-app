import React from 'react';

const MovieCard = ({ image, title, rating, badge, cardType = '1' }) => {
  const cardClass = `movie-card-${cardType}`;

  return (
    <div className={cardClass}>
      <img src={image} alt={title || "Movie Poster"} />
      
      {badge && (
        <span className={badge === "Top 10" ? "top-10" : "episode-baru"}>
          {badge}
        </span>
      )}

      {title && <p className="movie-title">{title}</p>}
      
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