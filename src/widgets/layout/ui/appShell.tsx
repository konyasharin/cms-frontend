import { FC, ReactNode, useRef } from 'react';
import { useCssVar } from '@siberiacancode/reactuse';
import {
  AppShellConfig,
  HEADER_HEIGHT_KEY,
  LAYOUT_SPACING_KEY,
} from '@widgets/layout';

interface AppShellProps {
  config: AppShellConfig;
  header: ReactNode;
  children?: ReactNode;
}

export const AppShell: FC<AppShellProps> = props => {
  const ref = useRef(null);
  const getSpacing = () => {
    if (!props.config.spacing) return '0';
    if (typeof props.config.spacing === 'number')
      return `${props.config.spacing}px`;
    return props.config.spacing;
  };
  useCssVar(ref, HEADER_HEIGHT_KEY, `${props.config.header.height}px`);
  useCssVar(ref, LAYOUT_SPACING_KEY, getSpacing());

  return (
    <div
      className={'dark min-h-screen bg-background'}
      style={{
        paddingTop: `calc(var(${HEADER_HEIGHT_KEY}) + var(${LAYOUT_SPACING_KEY}))`,
      }}
      ref={ref}
    >
      <header>{props.header}</header>
      <main>{props.children}</main>
    </div>
  );
};
