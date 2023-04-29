import { useContext } from 'react'
import { CurrentUserContext } from '../contexts/currentUser'

export function useCurrentUserContext() {
    const {
        currentUserId,
        updateContextValue
    } = useContext(CurrentUserContext)

    return {
        currentUserId,
        updateContextValue
    }
}