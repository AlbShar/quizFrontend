import React, { ReactNode, FC, useEffect } from 'react';
import * as ReactDOM from 'react-dom';

type PortalProps = {
  children: ReactNode;
};
const Portal: FC<PortalProps> = ({ children }) => {
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
