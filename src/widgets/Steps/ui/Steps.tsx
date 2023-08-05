import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Text, TextColor } from 'shared/ui/Text/Text';
import cls from './Steps.module.scss';
import { steps } from '../model/items';
import { StepCard } from './StepCard';

interface StepsProps {
  className?: string;
}

export const Steps: FC<StepsProps> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <section className={classNames(cls.Steps, className)}>
      <a href="#">
        <Button theme={ButtonTheme.DARK} className={cls.Steps_plate}>{t('howItWork')}</Button>
      </a>
      <Text tag="h2" className={cls.Steps_title}>{t('steps.title')}</Text>
      <Text tag="p" color={TextColor.TRANSLUCENT} className={cls.Steps_subtitle}>{t('steps.subtitle')}</Text>

      <div className={cls.Steps_grid}>
        {
          steps.map((step) => (
            <StepCard
              key={step.title}
              {...step}
            />
          ))
        }
      </div>
    </section>
  );
};
