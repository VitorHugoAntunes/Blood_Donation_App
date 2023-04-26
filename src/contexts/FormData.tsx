import { ReactNode, useState } from "react";
import { createContext } from "react";

interface FormDataContextType {
    name: string,
    setName: (name: string) => void,
    email: string,
    setEmail: (email: string) => void,
    mobileNumber: string,
    setMobileNumber: (mobileNumber: string) => void
    dateOfBirth: string,
    setDateOfBirth: (name: string) => void
    bloodType: string,
    setBloodType: (bloodType: string) => void
}

interface FormDataProviderProps {
    children: ReactNode,
}

export const FormDataContext = createContext({} as FormDataContextType)

export function FormDataProvider({ children }: FormDataProviderProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [bloodType, setBloodType] = useState('');

    return (
        <FormDataContext.Provider value={{
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
        }}>
            {children}
        </FormDataContext.Provider>
    )
}