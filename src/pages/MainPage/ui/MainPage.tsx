import { Header } from 'widgets/Header';
import { MainScreen } from 'widgets/MainScreen';
import { Steps } from 'widgets/Steps';
import { Footer } from 'widgets/Footer';
import { useRef } from 'react';
import cls from './MainPage.module.scss';

const MainPage = () => {
  const stepsEl = useRef<HTMLSelectElement>(null);

  const handleScrollToSteps = () => {
    const topOffset = stepsEl?.current?.offsetTop;

    console.log(topOffset);

    window.scrollTo({
      top: topOffset,
      behavior: 'smooth',
    });
  };

  return (
    <div className={cls.Page}>
      <div className={cls.Page_inner}>
        <Header onClickScroll={handleScrollToSteps} />
        <MainScreen onClickScroll={handleScrollToSteps} />
        <div className="container">
          <Steps ref={stepsEl} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
