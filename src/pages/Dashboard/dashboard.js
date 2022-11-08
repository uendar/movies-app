import MovieList from "../Movies/movies";
import { Layout, Typography } from "antd";
import { connect } from "react-redux";

import { useEffect } from "react";
import { getMovies, showLoadingSpinner } from "../../redux/actions";
import Sidebar from "../../components/Sidebar/Sidebar";
const { Header, Footer, Sider } = Layout;

const mapStateToProps = ({ dispatch }) => ({
  dispatch,
});
const Dashboard = ({ dispatch }) => {
  useEffect(() => {
    dispatch(showLoadingSpinner());
    dispatch(getMovies());
  }, []);
  return (
    <Layout hasSider>
      <Sider
        width="24vw"
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0,
          bottom: 0,
        }}
      >
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Sidebar />
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: "24vw", minHeight: "100vh" }}>
        <Header className="site-layout-background">
          <Typography.Title style={{ color: "white", textAlign: "center" }} level={1}>
            MOVIES
          </Typography.Title>
        </Header>

        <MovieList />
        <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default connect(mapStateToProps)(Dashboard);
