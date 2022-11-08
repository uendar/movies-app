import { Select, InputNumber, Space, DatePicker, Input, Typography, Row, Col, Button } from "antd";
import { useState } from "react";
import { getMovies, showLoadingSpinner } from "../../redux/actions";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();

  const filterMovies = (titleSearch) => {
    dispatch(showLoadingSpinner());
    if (typeof titleSearch !== "string" || !(titleSearch instanceof String)) {
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
    dispatch(showLoadingSpinner());
    dispatch(
      getMovies({
        params: `&title=${movieText}`,
      })
    );
  };

  const getAllMovies = () => {
    dispatch(showLoadingSpinner());
    dispatch(
      getMovies({
        params: ``,
      })
    );
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
        <InputNumber min={1} max={10} size="large" placeholder="Min rating" step="0.1" defaultValue={null} onChange={(e) => setMinRange(e)} /> -
        <InputNumber min={1} size="large" max={10} placeholder="Max rating" step="0.1" defaultValue={null} onChange={(e) => setMaxRange(e)} />
      </Col>
      <Col span={20} offset={2} style={{ marginTop: "20px" }}>
        <Title level={3} style={{ color: "white" }}>
          Release date
        </Title>
        <Space direction="vertical" size={12}>
          <RangePicker
            picker="year"
            size="large"
            onChange={(e) => {
              const valueOfInput1 = new Date(e[0].format()).getUTCFullYear();
              const valueOfInput2 = new Date(e[1].format()).getUTCFullYear();
              setReleaseDate([valueOfInput1, valueOfInput2]);
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
