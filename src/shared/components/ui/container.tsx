import { FC, ReactNode } from 'react';
import { cn } from '@shared/lib/utils';

interface ContainerProps {
  className?: string;
  children?: ReactNode;
}

export const Container: FC<ContainerProps> = props => {
  return <div className={cn('m-auto', props.className)}>{props.children}</div>;
};
