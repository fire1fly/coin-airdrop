import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextColor } from 'shared/ui/Text/Text';
import cls from './MainScreen.module.scss';

interface MainScreenProps {
  className?: string;
  onClickScroll?: () => void;
}

export const MainScreen: FC<MainScreenProps> = ({ className, onClickScroll }) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.MainScreen, className)}>
      <div className={cls.MainScreen_info}>
        <Button theme={ButtonTheme.DARK} className={cls.MainScreen_btn_plate} disabled>Arbitrum Airdrop</Button>
        <Text tag="h1" className={classNames(cls.MainScreen_title, '_text-center')}>{t('pageTitle')}</Text>
        <Text
          tag="p"
          color={TextColor.TRANSLUCENT}
          className={classNames(cls.MainScreen_subtitle, '_text-center')}
        >
          {t('pageSubtitle')}
        </Text>
        <Button className={cls.MainScreen_btn_get} align="center" onClick={onClickScroll}>{t('get')}</Button>
      </div>
    </div>
  );
};
