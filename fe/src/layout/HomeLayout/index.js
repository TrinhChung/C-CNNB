import Navbar from "../../component/Navbar";
import { Layout } from "antd";
import FooterComponent from "./Footer";
const { Content } = Layout;
const HomeLayout = ({ children, menu }) => {
  return (
    <Layout>
      <Navbar data={menu} />
      <Content style={{ minHeight: "calc(100vh - 64px)" }}>{children}</Content>
      <FooterComponent />
    </Layout>
  );
};
export default HomeLayout;
