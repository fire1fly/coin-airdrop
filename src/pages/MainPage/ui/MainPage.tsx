import { Header } from 'widgets/Header';
import { MainScreen } from 'widgets/MainScreen';
import { Steps } from 'widgets/Steps';
import { Footer } from 'widgets/Footer';
import cls from './MainPage.module.scss';

const MainPage = () => (
  <div className={cls.Page}>
    <div className={cls.Page_inner}>
      <Header />
      <MainScreen />
      <div className="container">
        <Steps />
        <Footer />
      </div>
    </div>
  </div>
);

export default MainPage;
