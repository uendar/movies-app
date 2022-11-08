import { Card, Descriptions, Badge, Row, Col } from "antd";
import { useLocation } from "react-router-dom";
import PageHeader from "../Header/Header";

const { Meta } = Card;
const MovieCard = () => {
  const location = useLocation();
  const item = location.state;
  // g(location.state);
  return (
    <>
      <Row>
        <Col span={22} style={{ marginTop: "20px" }}>
          <PageHeader title="Go back to movie list"></PageHeader>
        </Col>
      </Row>
      <Row>
        <Col span={12} offset={2}>
          <Card hoverable style={{ width: "400px" }} cover={<img alt="example" src={item.image} />}>
            <Badge.Ribbon text={`IMDB ${item.imDbRating}`}>
              <Meta title={item.title} description={item.description} />
            </Badge.Ribbon>
          </Card>
        </Col>
        <Col span={8}>
          <Descriptions title="Movie Info" layout="vertical" bordered>
            <Descriptions.Item label="Plot" span={3}>
              {item.plot}
            </Descriptions.Item>
            <Descriptions.Item label="Stars" span={3}>
              {item.stars}
            </Descriptions.Item>
            <Descriptions.Item label="Genres">{item.genres}</Descriptions.Item>
            <Descriptions.Item label="Runtime">{item.runtimeStr}</Descriptions.Item>
          </Descriptions>
        </Col>
      </Row>
    </>
  );
};
export default MovieCard;
