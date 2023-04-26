import { useContext } from 'react'
import { FormDataContext } from '../contexts/FormData'

export function useFormContext() {
    const {
        name,
        email,
        mobileNumber,
        dateOfBirth,
        bloodType,
        setName,
        setEmail,
        setMobileNumber,
        setDateOfBirth,
        setBloodType
    } = useContext(FormDataContext)

    return {
        name,
        email,
        mobileNumber,
        dateOfBirth,
        bloodType,
        setName,
        setEmail,
        setMobileNumber,
        setDateOfBirth,
        setBloodType
    }
}