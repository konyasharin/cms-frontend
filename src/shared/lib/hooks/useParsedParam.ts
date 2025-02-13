import { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { APP_PATHS } from '@shared/const';
import { ZodType } from 'zod';

interface IParamData {
  key: string;
  schema: ZodType;
  type: 'query' | 'path';
}

export const useParsedParam = <TValue = string>(
  paramData: IParamData,
  navigateOnError: string | undefined = APP_PATHS.APPS,
) => {
  const navigate = useNavigate();
  const params = useParams();
  const [searchParams] = useSearchParams();
  const [parsedParam, setParsedParam] = useState<TValue | undefined>();

  useEffect(() => {
    try {
      if (paramData.type === 'path')
        setParsedParam(paramData.schema.parse(params[paramData.key]));
      else if (paramData.type === 'query')
        setParsedParam(paramData.schema.parse(searchParams.get(paramData.key)));
    } catch (e) {
      console.error(e);
      if (navigateOnError) navigate(navigateOnError);
    }
  }, [searchParams, params]);

  return parsedParam;
};
