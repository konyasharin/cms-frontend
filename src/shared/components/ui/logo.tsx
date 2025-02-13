import { FC } from 'react';
import { Typography } from '@shared/components';
import { cn } from '@shared/lib/utils';
import { Layers } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export const Logo: FC<LogoProps> = props => {
  return (
    <div className={cn('flex gap-4 items-center', props.className)}>
      <Layers size={32} className={'text-primary'} />
      <Typography tag={'h1'}>CMS</Typography>
    </div>
  );
};
