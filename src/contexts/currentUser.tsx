import { ReactNode, useState } from "react";
import { createContext } from "react";

interface currentUserContextType {
    currentUserId: string;
    updateContextValue: (userId: string) => void
}

interface CurrentUserProviderProps {
    children: ReactNode,
}

export const CurrentUserContext = createContext({} as currentUserContextType)

export function CurrentUserProvider({ children }: CurrentUserProviderProps) {
    const [currentUserId, setCurrentUserId] = useState<string>('');

    function updateContextValue(value: string) {
        setCurrentUserId(value)
    }

    return (
        <CurrentUserContext.Provider value={{
            currentUserId,
            updateContextValue
        }}>
            {children}
        </CurrentUserContext.Provider>
    )
}