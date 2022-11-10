import React from "react";
import { Layout, List } from "antd";
import MovieCard from "../../components/MovieCard/movieCard";
import { useSelector } from "react-redux";
const { Content } = Layout;

const MovieList = () => {
  const allMovies = useSelector((state: any) => state.simpleReducer.movieList);
  const searchedMovies = useSelector((state: any) => state.simpleReducer.searchedMovies);
  const loading = useSelector((state: any) => state.simpleReducer.loading);
  const movies = searchedMovies ? searchedMovies : allMovies;

  return (
    <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
      <List
        loading={loading}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 5,
          lg: 5,
          xl: 5,
          xxl: 5,
        }}
        dataSource={movies}
        renderItem={(movie) => (
          <List.Item>
            <MovieCard item={movie}></MovieCard>
          </List.Item>
        )}
      />
    </Content>
  );
};

export default MovieList;
