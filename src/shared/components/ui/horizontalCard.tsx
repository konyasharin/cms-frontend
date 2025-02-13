import { FC, ReactNode } from 'react';
import { cn } from '@shared/lib/utils';

interface HorizontalCardProps {
  children?: ReactNode;
  className?: string;
}

export const HorizontalCard: FC<HorizontalCardProps> = props => {
  return (
    <div
      className={cn('flex items-center border rounded p-3', props.className)}
    >
      {props.children}
    </div>
  );
};
