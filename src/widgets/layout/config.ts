import { APP_PATHS } from '@shared/const';
import { AppShellConfig, HeaderConfig } from '@widgets/layout';
import { HeaderNavigationConfig } from '@widgets/layout/model/HeaderNavigationConfig.ts';

export const headerConfig: HeaderConfig = {
  height: 60,
};

export const appShellConfig: AppShellConfig = {
  header: headerConfig,
  spacing: 60,
};

export const headerNavigationConfig: HeaderNavigationConfig = {
  items: [
    { text: 'Приложения', link: APP_PATHS.HOME },
    { text: 'Доступ', link: APP_PATHS.HOME },
  ],
};
