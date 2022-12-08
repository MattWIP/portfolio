import { FunctionComponent, useState, useEffect } from "react";
import { SiteContext, defaultState } from "./createContext";

import { ChildrenProps } from "../types";

export const Provider: FunctionComponent<ChildrenProps> = (props) => {
    const [navigationOpen, setNavigationOpen] = useState<boolean>(defaultState.navigationOpen);

    const toggleNavigationOpen = () => {
        setNavigationOpen(!navigationOpen);
    }

    return (
        <SiteContext.Provider
          value={{
            navigationOpen,
            toggleNavigationOpen,
          }}
        >
            {props.children}
        </SiteContext.Provider>
    )
}