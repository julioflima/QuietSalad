import React, {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {IInjurie} from '../interfaces/Injuries';

export type TInjuriesContext = {
  injuriesState: [IInjurie[], Dispatch<SetStateAction<IInjurie[]>>];
  valueState: [number[], Dispatch<SetStateAction<number[]>>];
  musclesState: [string[], Dispatch<SetStateAction<string[]>>];
  onNextHandler: () => void;
};

const injuriesContext: TInjuriesContext = {
  injuriesState: [[], () => {}],
  valueState: [[0], () => {}],
  musclesState: [[], () => {}],
  onNextHandler: () => {},
};

export const InjuriesContext = createContext<TInjuriesContext>(injuriesContext);

const useInjuries = (): TInjuriesContext => useContext(InjuriesContext);

const InjuriesProvider: FC = ({children}): JSX.Element => {
  const [injuries, setInjuries] = useState<IInjurie[]>([]);
  const [value, setValue] = React.useState<number[]>([0]);
  const [muscles, setMuscles] = React.useState<string[]>([]);

  const onNextHandler = useCallback((): void => {
    if (value[0]) {
      setInjuries((oldState: IInjurie[]) => {
        const arr = [
          ...oldState,
          ...(muscles?.length
            ? muscles?.map((item: string) => ({
                injurie: item,
                severity: value[0],
              }))
            : []),
        ];
        return [...new Map(arr.map(v => [v.injurie, v])).values()];
      });
      setMuscles([]);
      setValue([0]);
    }

    return setMuscles([]);
  }, [muscles, setInjuries, setMuscles, setValue, value]);

  useEffect(() => {
    console.log(JSON.stringify(injuries));
  }, [injuries]);

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
