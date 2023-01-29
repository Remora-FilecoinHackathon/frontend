import { FC, PropsWithChildren } from 'react';
import MainLandingPage from 'components/main/mainLandingPage';
import HeaderLandingPage from 'components/header/headerLandingPage';
// import Footer from 'components/footer';

const LayoutLandingPage: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <>
      <HeaderLandingPage />
      <MainLandingPage>{children}</MainLandingPage>
      {/* <Footer /> */}
    </>
  );
};

export default LayoutLandingPage;
