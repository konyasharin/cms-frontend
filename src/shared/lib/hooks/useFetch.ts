import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppSchema } from '@entities/app';
import { ErrorContext } from '@shared/components';
import { BAD_REQUEST_ERROR, BASE_ERROR } from '@shared/const';
import { useFetchParse, useNotification } from '@shared/lib/hooks';
import { AxiosResponse } from 'axios';
import { z } from 'zod';

interface UseFetchData<T> {
  response: AxiosResponse<T> | undefined;
  error: {
    isError: boolean;
    message?: string;
    redirect?: string;
  };
}

export const useFetch = <T>(data: UseFetchData<T>) => {
  const navigate = useNavigate();
  const context = useContext(ErrorContext);

  useFetchParse(data.response, z.array(AppSchema));
  useNotification(
    data.error.isError,
    data.error.message ?? BASE_ERROR,
    'error',
  );
  useEffect(() => {
    if (data.error.isError) {
      console.log('error', data.error.redirect);
      if (data.error.redirect) navigate(data.error.redirect);
      else context?.setErrorData({ message: BAD_REQUEST_ERROR, code: 400 });
    }
  }, [data.error.isError]);
};
