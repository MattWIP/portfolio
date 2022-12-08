import {
    createContext,
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    useEffect,
    useState
} from 'react';

interface ISiteContext {
    navigationOpen: boolean,
    toggleNavigationOpen?: () => void,
}

export const defaultState = {
    navigationOpen: false,
}

export const SiteContext = createContext<ISiteContext>(defaultState);
