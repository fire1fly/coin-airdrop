import IconWallet from 'shared/assets/icons/icon-step-wallet.svg';
import IconFacebook from 'shared/assets/icons/icon-step-facebook.svg';
import IconTwitter from 'shared/assets/icons/icon-step-twitter.svg';

export interface IStepCard {
  icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
  title?: string;
  description?: string;
  link?: string;
  btnLabel?: string;
}

export const steps: IStepCard[] = [
  {
    icon: IconWallet,
    title: 'steps.wallet',
    description: 'pageSubtitle',
    link: '#',
    btnLabel: 'connect',
  },
  {
    icon: IconFacebook,
    title: 'steps.facebook',
    description: 'joinus',
    link: '#',
    btnLabel: 'subscribe',
  },
  {
    icon: IconTwitter,
    title: 'steps.twitter',
    description: 'joinus',
    link: '#',
    btnLabel: 'subscribe',
  },
];
