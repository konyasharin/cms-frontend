import { App, AppApi, AppSchema } from '@entities/app';
import { useFetchParse } from '@shared/lib/hooks';
import { useQuery } from '@tanstack/react-query';

export const useGetApp = (id: App['id']) => {
  const controller = useQuery({
    queryKey: [id],
    queryFn: () => AppApi.GetApp(id),
  });
  useFetchParse(controller.data, AppSchema);

  return controller;
};
