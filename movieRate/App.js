import React, { useState } from "react";
import "./styles.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);

  function handleAddMovie(e) {
    e.preventDefault();
    const newMovie = { title, comment, rating };
    setMovies(movies.concat(newMovie));
    setTitle("");
    setComment("");
    setRating(1);
  }

  function handleRemoveMovie(index) {
    setMovies(movies.filter((_, i) => i !== index));
  }

  return (
    <div className="app">
      <h1>My Movie List</h1>

      <form onSubmit={handleAddMovie}>
        <input
          type="text"
          placeholder="Movie title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Add your review..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <label>
          Rating:
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>

        <button type="submit">Add Movie</button>
      </form>

      <div className="movie-list">
        {movies.length === 0 ? (
          <p>No movies added yet 🎬</p>
        ) : (
          movies.map((movie, index) => (
            <div key={index} className="movie-item">
              <h3>{movie.title}</h3>
              <p>{"⭐".repeat(movie.rating)}</p>
              {movie.comment && <p>{movie.comment}</p>}
              <button onClick={() => handleRemoveMovie(index)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
