import { useMatch, useOutletContext } from "react-router-dom";

const MoviePage = () => {
  const match = useMatch("/movies/:id");
    const id  = match.params.id;
  const { movies } = useOutletContext();
  const movie = movies.find((movie) => movie.id === parseInt(id));
    
    
  if (!movie) {
    return <p>Movie not found.</p>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Duration:</strong> {movie.duration} minutes</p>
      <p><strong>Budget:</strong> {movie.budget} million dollars</p>
      <img src={movie.imageUrl} alt={movie.title} />
      <p><strong>Description:</strong> {movie.description}</p>
    </div>
  );
};

export default MoviePage;