import { Provider } from 'react-redux';

import { store } from '../store/store';

export const withReduxToolkit = (Component: () => JSX.Element) => () => {
    return (
        <Provider store={store}>
            <Component/>
        </Provider>
    );
};

