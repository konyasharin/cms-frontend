import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@shared/components';
import { cn } from '@shared/lib/utils';
import { headerNavigationConfig } from '@widgets/layout';

interface HeaderNavigationProps {
  className?: string;
}

export const HeaderNavigation: FC<HeaderNavigationProps> = props => {
  return (
    <div className={cn('flex gap-8', props.className)}>
      {headerNavigationConfig.items.map(item => (
        <Typography
          className={'text-gray-400 hover:text-primary'}
          key={item.link}
        >
          <Link to={item.link}>{item.text}</Link>
        </Typography>
      ))}
    </div>
  );
};
