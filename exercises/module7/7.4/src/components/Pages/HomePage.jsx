import { useOutletContext } from "react-router-dom";

const HomePage = () => {
  const { movies } = useOutletContext();
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my favorite movies website!</p>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <a href={`/movies/${movie.id}`}>{movie.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
