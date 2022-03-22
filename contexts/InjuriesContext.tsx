import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useContext,
  useState,
} from 'react';
import {IInjurie} from '../interfaces/Injuries';

export type TInjuriesContext = {
  injuriesState: [IInjurie[], Dispatch<SetStateAction<IInjurie[]>>];
  valueState: [number, Dispatch<SetStateAction<number>>];
  musclesState: [string[], Dispatch<SetStateAction<string[]>>];
  onNextHandler: () => void;
};

const injuriesContext: TInjuriesContext = {
  injuriesState: [[], () => {}],
  valueState: [0, () => {}],
  musclesState: [[], () => {}],
  onNextHandler: () => {},
};

export const InjuriesContext = createContext<TInjuriesContext>(injuriesContext);

const useInjuries = (): TInjuriesContext => useContext(InjuriesContext);

const InjuriesProvider: FC = ({children}): JSX.Element => {
  const [injuries, setInjuries] = useState<IInjurie[]>([]);
  const [value, setValue] = React.useState(0);
  const [muscles, setMuscles] = React.useState<string[]>([]);

  const onNextHandler = useCallback((): void => {
    if (value) {
      setInjuries((oldState: IInjurie[]) => [
        ...oldState,
        ...(muscles?.length
          ? muscles?.map((item: string) => ({injurie: item, severity: value}))
          : []),
      ]);
      setMuscles([]);
      setValue(0);
    }
  }, [muscles, setInjuries, setMuscles, setValue, value]);

  return (
    <InjuriesContext.Provider
      value={{
        injuriesState: [injuries, setInjuries],
        valueState: [value, setValue],
        musclesState: [muscles, setMuscles],
        onNextHandler,
      }}>
      {children}
    </InjuriesContext.Provider>
  );
};

export {InjuriesProvider, useInjuries};
