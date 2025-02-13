import { useEffect } from 'react';
import { parse } from '@shared/lib/utils';
import { AxiosResponse } from 'axios';
import { ZodType } from 'zod';

export const useFetchParse = <T>(
  response: AxiosResponse<T> | undefined,
  schema: ZodType,
) => {
  useEffect(() => {
    if (response) parse(response.data, schema);
  }, [response]);
};
