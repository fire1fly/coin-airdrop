import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextColor } from 'shared/ui/Text/Text';
import cls from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

export const Footer: FC<FooterProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <footer className={classNames(cls.Footer, className)}>
      <Text
        tag="span"
        color={TextColor.TRANSLUCENT}
        className={cls.Footer_copy}
      >
        {t('copyright')}
      </Text>
      <div className={cls.Footer_bar}>
        <a href="#" className={cls.Footer_soclink}>Twitter</a>
        <a href="#" className={cls.Footer_soclink}>Facebook</a>
      </div>
    </footer>
  );
};
