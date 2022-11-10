import React from "react";
import { Select, InputNumber, Space, DatePicker, Input, Typography, Row, Col, Button } from "antd";
import { useState } from "react";
import { getMovies, showLoadingSpinner, searchMovie, resetMovies } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
const { Option } = Select;
const { Search } = Input;
const { Title } = Typography;
const { RangePicker } = DatePicker;

const Sidebar = () => {
  const genres = ["comedy", "drama", "thriller", "action", "family", "history", "crime", "horror", "romance"];
  const [genreFilter, setGenreFilter] = useState([]);
  const [minRangeFilter, setMinRange] = useState("");
  const [maxRangeFilter, setMaxRange] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const movieList = useSelector((state: any) => state.simpleReducer.movieList);
  const dispatch = useDispatch();

  const filterMovies = (titleSearch: any) => {
    dispatch(showLoadingSpinner());
    if (typeof titleSearch !== "string" || !(titleSearch.toString instanceof String)) {
      titleSearch = "";
    }
    let genres = "";
    genreFilter.map((item) => {
      genres = genres ? `${genres},${item}` : item;
    });
    dispatch(
      getMovies({
        params: `&title=${titleSearch}&genres=${genres}&user_rating=${minRangeFilter},${maxRangeFilter}&release_date=${releaseDate[0]},${releaseDate[1]}`,
      })
    );
  };

  const searchMovies = (movieText) => {
    if (!movieText) return;
    if (movieList && movieList.length > 0) {
      const movieSearched = movieList.filter((m) => {
        return m.title === movieText;
      });
      dispatch(showLoadingSpinner());
      dispatch(searchMovie({ movieSearched }));
    }
  };

  const getAllMovies = () => {
    dispatch(resetMovies());
  };
  return (
    <Row>
      <Col span={20} offset={2} style={{ marginTop: "20px" }}>
        <Title level={3} style={{ color: "white" }}>
          Search for a movie
        </Title>
        <Search
          onBlur={getAllMovies}
          defaultValue=""
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={(e) => searchMovies(e)}
        />
      </Col>

      <Col span={20} offset={2} style={{ marginTop: "20px" }}>
        <Title level={3} style={{ color: "white" }}>
          Select a genre
        </Title>
        <Select mode="multiple" allowClear size="large" style={{ width: "100%" }} placeholder="Please select genres" onChange={(e) => setGenreFilter(e)}>
          {genres.map((genre) => {
            return <Option key={genre}>{genre.toUpperCase()}</Option>;
          })}
        </Select>
      </Col>
      <Col span={20} offset={2} style={{ marginTop: "20px" }}>
        <Title level={3} style={{ color: "white" }}>
          Ratings
        </Title>
        <InputNumber min={1} max={10} size="large" placeholder="Min rating" step="0.1" defaultValue={null as any} onChange={(e) => setMinRange(e)} /> -
        <InputNumber min={1} size="large" max={10} placeholder="Max rating" step="0.1" defaultValue={null as any} onChange={(e) => setMaxRange(e)} />
      </Col>
      <Col span={20} offset={2} style={{ marginTop: "20px" }}>
        <Title level={3} style={{ color: "white" }}>
          Release date
        </Title>
        <Space direction="vertical" size={12}>
          <RangePicker
            picker="year"
            size="large"
            onChange={(e: any) => {
              const valueOfInput1 = new Date(e[0].format()).getUTCFullYear();
              const valueOfInput2 = new Date(e[1].format()).getUTCFullYear();
              setReleaseDate([valueOfInput1, valueOfInput2] as any);
            }}
          />
        </Space>

        <Button type="primary" block onClick={filterMovies} style={{ marginTop: "40px" }}>
          Filter
        </Button>
      </Col>
    </Row>
  );
};
export default Sidebar;
