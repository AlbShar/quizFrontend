import { createContext } from 'react';


const ContextCurrentQuestionNumb = createContext<[number, (item: number) => void] | null>(null);

const ContextLanguage = createContext<[string, (item: string) => void] | null>(null);


export { ContextCurrentQuestionNumb, ContextLanguage };

/*type ContextProps<T> = {
  children: React.ReactNode;
  value: [T, (item: T) => void];
};

const Context = <T,>({ children, value }: ContextProps<T>): JSX.Element => {
  return (
    <ContextCurrentQuestionNumb.Provider value={value}>
      {children}
    </ContextCurrentQuestionNumb.Provider>
  );
};

export default Context;*/
