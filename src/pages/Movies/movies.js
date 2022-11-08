import { Layout, List } from "antd";
import { connect } from "react-redux";
import MovieCard from "../../components/MovieCard/movieCard";

const { Content } = Layout;

const mapStateToProps = (state) => ({
  movieList: state.simpleReducer.movieList,
  loading: state.simpleReducer.loading,
});

const MovieList = ({ movieList, loading }) => {
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
        dataSource={movieList}
        renderItem={(movie) => (
          <List.Item>
            <MovieCard item={movie}></MovieCard>
          </List.Item>
        )}
      />
    </Content>
  );
};

export default connect(mapStateToProps)(MovieList);
