import Navbar from '../../component/Navbar';
import { Layout } from 'antd';
import FooterComponent from './Footer';
const { Content } = Layout;
const HomeLayout = ({ children, menu }) => {
  return (
    <Layout className="layout">
      <Navbar data={menu} />
      <Content
        style={{
          minHeight: '30vh',
          height: '80vh'
        }}
      >
        {children}
      </Content>
      <FooterComponent />
    </Layout>
  );
};
export default HomeLayout;