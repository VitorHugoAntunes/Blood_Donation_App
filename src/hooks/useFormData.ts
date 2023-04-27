import { useContext } from 'react'
import { FormDataContext } from '../contexts/FormData'

export function useFormContext() {
    const {
        name,
        email,
        mobileNumber,
        profilePicture,
        dateOfBirth,
        bloodType,
        city,
        state,
        password,
        setName,
        setEmail,
        setMobileNumber,
        setProfilePicture,
        setDateOfBirth,
        setBloodType,
        setCity,
        setState,
        setPassword
    } = useContext(FormDataContext)

    return {
        name,
        email,
        mobileNumber,
        profilePicture,
        dateOfBirth,
        bloodType,
        city,
        state,
        password,
        setName,
        setEmail,
        setMobileNumber,
        setProfilePicture,
        setDateOfBirth,
        setBloodType,
        setCity,
        setState,
        setPassword
    }
}