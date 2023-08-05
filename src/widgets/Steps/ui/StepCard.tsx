import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextColor } from 'shared/ui/Text/Text';
import { Button } from 'shared/ui/Button/Button';
import cls from './Steps.module.scss';
import { IStepCard } from '../model/items';

interface StepCardProps extends IStepCard {
  className?: string;
}

export const StepCard: FC<StepCardProps> = (props) => {
  const {
    className,
    icon: Icon,
    title,
    description,
    link,
    btnLabel = '',
  } = props;

  const { t } = useTranslation();
  return (
    <div className={classNames(cls.Steps_card, className)}>
      {Icon && <Icon className={cls.Steps_card_icon} />}
      {title && <Text tag="h3" className={cls.Steps_card_title}>{t(title)}</Text>}
      {description
        && (
          <Text
            tag="p"
            color={TextColor.TRANSLUCENT}
            className={cls.Steps_card_desc}
          >
            {t(description)}
          </Text>
        )}
      {link && (
        <a href={link} className={cls.Steps_card_btn_wrapper}>
          <Button className={cls.Steps_card_btn} align="center">{t(btnLabel)}</Button>
        </a>
      )}
    </div>
  );
};
