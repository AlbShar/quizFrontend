import React, { ReactNode, FC } from "react";
import * as ReactDOM from "react-dom";

type PortalProps = {
    children: ReactNode,
};
const Portal: FC<PortalProps> = ({children}) => {
    const container = document.createElement("div");
    document.body.append(container);

    return ReactDOM.createPortal(children, container);
};

export default Portal;