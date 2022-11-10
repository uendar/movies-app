import React, { FC } from "react";
import { PageHeader } from "antd";
import { useNavigate } from "react-router-dom";
interface PageHeadersProps {
  title?: string;
  subtitle?: string;
}

const PageHeaders: FC<PageHeadersProps> = ({ title, subtitle }) => {
  const navigate = useNavigate();
  return <PageHeader className="site-page-header" onBack={() => navigate(-1)} title={title} subTitle={subtitle} />;
};
export default PageHeaders;
