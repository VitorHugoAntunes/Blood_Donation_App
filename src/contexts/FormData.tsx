import { ReactNode, useState } from "react";
import { createContext } from "react";

interface FormDataContextType {
    name: string,
    setName: (name: string) => void,
    email: string,
    setEmail: (email: string) => void,
    mobileNumber: string,
    setMobileNumber: (mobileNumber: string) => void
    profilePicture: string,
    setProfilePicture: (imgUrl: string) => void
    dateOfBirth: string,
    setDateOfBirth: (name: string) => void,
    bloodType: string,
    setBloodType: (bloodType: string) => void,
    city: string,
    setCity: (city: string) => void,
    state: string,
    setState: (state: string) => void,
    password: string,
    setPassword: (password: string) => void,
}

interface FormDataProviderProps {
    children: ReactNode,
}

export const FormDataContext = createContext({} as FormDataContextType)

export function FormDataProvider({ children }: FormDataProviderProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [password, setPassword] = useState('');
    const [bloodType, setBloodType] = useState('');

    return (
        <FormDataContext.Provider value={{
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
        }}>
            {children}
        </FormDataContext.Provider>
    )
}