import { useState } from "react";
import { FormContainer } from "../../../styles/pages/formStep2";

import axiosInstance from "@/utils/axios";
import { useFormContext } from "@/hooks/useFormData";
import { useRouter } from "next/router";
import * as ToggleGroup from '@radix-ui/react-toggle-group';

function Step1() {
    const router = useRouter();

    const [ambivalence, setAmbivalence] = useState('');
    const [type, setType] = useState('');

    const {
        name,
        email,
        mobileNumber,
        profilePicture,
        dateOfBirth,
        city,
        state,
        password,
        bloodType,
        setBloodType
    } = useFormContext()


    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = { name, email, mobileNumber, profilePicture, dateOfBirth, city, state, password, bloodType };
        await axiosInstance.post('../api/users', data)
            .then(response => console.log(response.data))

        router.push("/login")
    }

    return (
        <FormContainer>
            <div className="profileDiv">
                <h2>Select your blood group</h2>
            </div>
            <form onSubmit={handleSubmit}>

                <ToggleGroup.Root className="toggleGroup" type="single" onValueChange={(value) => setType(value)}>
                    <ToggleGroup.Item className="toggleItem" value="A">A</ToggleGroup.Item>
                    <ToggleGroup.Item className="toggleItem" value="B">B</ToggleGroup.Item>
                    <ToggleGroup.Item className="toggleItem" value="AB">AB</ToggleGroup.Item>
                    <ToggleGroup.Item className="toggleItem" value="O">O</ToggleGroup.Item>
                </ToggleGroup.Root>

                <ToggleGroup.Root className="toggleGroup2" type="single" onValueChange={(value) => setAmbivalence(value)}>
                    <ToggleGroup.Item className="toggleItem" value="+">+</ToggleGroup.Item>
                    <ToggleGroup.Item className="toggleItem" value="-">-</ToggleGroup.Item>
                </ToggleGroup.Root>

                <button type="submit" onClick={() => setBloodType(type + ambivalence)}>Submit</button>
            </form>
        </FormContainer>
    )
}

export default Step1;