import { FC, PropsWithChildren } from 'react';
import { MainStyle } from './mainStyles';

const MainLandingPage: FC<PropsWithChildren> = (props) => {
  return <MainStyle size="content" forwardedAs="main" {...props} />;
};

export default MainLandingPage;
