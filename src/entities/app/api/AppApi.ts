import { App } from '@entities/app';
import { createInstance } from '@shared/api';
import { AxiosResponse } from 'axios';

export class AppApi {
  private static readonly Instance = createInstance('/app');

  public static GetApps = (): Promise<AxiosResponse<App[]>> => {
    return this.Instance.get('/');
  };

  public static GetApp = (id: App['id']): Promise<AxiosResponse<App>> => {
    return this.Instance.get(`/${id}`);
  };
}
