import React from 'react';
export const ContextQuestionNumb = React.createContext();

const Context = ({children, value}) => {
    return (
        <ContextQuestionNumb.Provider value={value}>
            {children}
        </ContextQuestionNumb.Provider>
    );
};

export default Context;