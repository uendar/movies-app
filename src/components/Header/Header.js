import { PageHeader } from "antd";
import { useNavigate } from "react-router-dom";

const PageHeaders = ({ title, subtitle }) => {
  const navigate = useNavigate();
  return (
    <PageHeader
      className="site-page-header"
      onBack={() => navigate(-1)}
      title={title}
      subTitle={subtitle}
    />
  );
};
export default PageHeaders;
