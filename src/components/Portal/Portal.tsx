import { ReactNode, useEffect } from 'react';
import * as ReactDOM from 'react-dom';

type PortalProps = {
  children: ReactNode;
};

const Portal = ({ children }: PortalProps): JSX.Element => {
  const container = document.createElement('article');
  const root = document.querySelector('#root');
  root?.append(container);

  useEffect(() => {
    return () => {
      container.remove();
    };
  });

  return ReactDOM.createPortal(children, container);
};

export default Portal;
