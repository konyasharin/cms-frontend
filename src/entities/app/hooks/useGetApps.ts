import { AppApi } from '@entities/app';
import { useFetch } from '@shared/lib/hooks';
import { useQuery } from '@tanstack/react-query';

export const useGetApps = () => {
  const controller = useQuery({
    queryKey: [],
    queryFn: AppApi.GetApps.bind(AppApi),
  });
  useFetch({ response: controller.data, error: controller });

  return controller;
};
