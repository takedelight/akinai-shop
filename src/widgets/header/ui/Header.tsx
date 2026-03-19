import { BottomNav } from '@/widgets/header/ui/BottomNav';
import { MiddleNav } from '@/widgets/header/ui/MiddleNav';
import { TopNav } from '@/widgets/header/ui/TopNav';

import s from './styles.module.scss';

export const Header = () => {
  return (
    <header className={s.header}>
      <TopNav />
      <MiddleNav />
      <BottomNav />
    </header>
  );
};
