import { createContext, FC, ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { APP_PATHS } from '@shared/const';
import { Error as ErrorType } from '@shared/model';

interface ErrorProviderProps {
  children?: ReactNode;
}

interface ErrorContextData {
  errorData: ErrorType | null;
  setErrorData: (errorData: ErrorType) => void;
}

export const ErrorContext = createContext<ErrorContextData | null>(null);

export const ErrorProvider: FC<ErrorProviderProps> = props => {
  const navigate = useNavigate();
  const [errorData, setErrorData] = useState<ErrorType | null>(null);

  useEffect(() => {
    if (errorData) navigate(APP_PATHS.ERROR);
  }, [errorData]);

  return (
    <ErrorContext.Provider value={{ errorData, setErrorData }}>
      {props.children}
    </ErrorContext.Provider>
  );
};
