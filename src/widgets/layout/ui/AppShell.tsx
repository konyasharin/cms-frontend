import { FC, ReactNode, useRef } from 'react';
import { useCssVar } from '@siberiacancode/reactuse';
import { HEADER_HEIGHT_KEY, HeaderConfig } from '@widgets/layout';

interface AppShellProps {
  config: {
    header: HeaderConfig;
  };
  header: ReactNode;
  children?: ReactNode;
}

export const AppShell: FC<AppShellProps> = props => {
  const ref = useRef(null);
  useCssVar(ref, HEADER_HEIGHT_KEY, `${props.config.header.height}px`);

  return (
    <div
      className={'dark bg-secondary min-h-screen'}
      style={{ paddingTop: `calc(var(${HEADER_HEIGHT_KEY}) + 5px)` }}
      ref={ref}
    >
      <header>{props.header}</header>
      <main>{props.children}</main>
    </div>
  );
};
