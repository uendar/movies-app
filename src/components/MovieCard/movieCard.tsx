import React, { FC } from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const { Meta } = Card;

interface MovieCardProps {
  item?: any;
}

const MovieCard: FC<MovieCardProps> = ({ item }) => {
  return (
    <>
      <Link
        to={{
          pathname: `/${item.id}`,
        }}
        state={item}
      >
        <Card hoverable style={{ width: 200 }} cover={<img alt="example" src={item.image} />}>
          <Meta title={item.title} description={item.description} />
        </Card>
      </Link>
    </>
  );
};
export default connect()(MovieCard);
