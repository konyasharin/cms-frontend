import { FC, ReactNode } from 'react';
import { cn } from '@shared/lib/utils';

type Tag = `h${1 | 2 | 3 | 4 | 5 | 6}` | 'p';

interface TypographyProps {
  tag?: Tag;
  variant?: Tag;
  children?: ReactNode;
  className?: string;
}

export const Typography: FC<TypographyProps> = props => {
  const Tag = props.tag ?? 'p';
  return (
    <Tag className={cn('text-primary', props.className, props.variant)}>
      {props.children}
    </Tag>
  );
};
