import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      <Footer />
    </>
  );
};

export default Layout;

const OutletWrapper = styled.div`
  min-height: 100vh;

  // 데스크탑
  @media all and (min-width: 1024px) {
    width: 1024px;
    margin: 0 auto;
  }
`;
