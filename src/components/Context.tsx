import {FC, createContext } from "react";
export const ContextQuestionNumb = createContext<IContext["value"] | null>(null);

interface IContext {
    children: React.ReactNode;
    value: [number, (numb: number) => void];
}

const Context: FC<IContext> = ({children, value}) => {
    return (
        <ContextQuestionNumb.Provider value={value}>
            {children}
        </ContextQuestionNumb.Provider>
    );
};

export default Context;