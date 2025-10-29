import React from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  const movies = [
    { id: 1, title: "Sholay" },
    { id: 2, title: "Kantara" },
    { id: 3, title: "Tere Naam" },
    { id: 4, title: "Hasina Dilruba" },
  ];
  return (
    <div className="container">
      <h1 className="fw-bold text-center"> Movie Collection</h1>
      <div className="container">
        <div className="row">
          {movies.map((movie,i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3">
              <Link to={`/movie/${movie.id}`} className="nav-link">
              <div class="card bg-warning" style={{"width": "18rem;"}}>
                <div class="card-body">
                  <h5 class="card-title">{movie.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Movie subtitle</h6>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;
