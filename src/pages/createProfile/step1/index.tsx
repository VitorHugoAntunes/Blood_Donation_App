import { useState } from "react";
import { FormContainer } from "../../../styles/pages/formStep1";

import axiosInstance from "@/utils/axios";
import { useFormContext } from "@/hooks/useFormData";
import { useRouter } from "next/router";

function Step1() {
    const router = useRouter();

    const {
        name,
        email,
        mobileNumber,
        dateOfBirth,
        setName,
        setEmail,
        setMobileNumber,
        setDateOfBirth,
    } = useFormContext()


    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // const data = { name, email, mobileNumber, dateOfBirth };
        // axiosInstance.post('api/users', data)
        //     .then(response => console.log(response.data))

        router.push("/createProfile/step2")

    }

    return (
        <FormContainer>
            <div className="profileDiv">
                <h2>Create profile</h2>
            </div>
            <div className="profilePictureDiv">

            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    onChange={event => setName(event.target.value)}
                    value={name}
                />

                <label htmlFor="">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="john@gmail.com"
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                />

                <label htmlFor="">Mobile Number</label>
                <input
                    type="text"
                    name="phone"
                    placeholder="(11) 99999-9999"
                    onChange={event => setMobileNumber(event.target.value)}
                    value={mobileNumber}
                />

                <label htmlFor="">Date of Birth</label>
                <input
                    type="date"
                    name="dateOfBirth"
                    placeholder="10-10-1999"
                    onChange={event => setDateOfBirth(event.target.value)}
                    value={dateOfBirth}
                />

                <button type="submit">Next</button>
            </form>
        </FormContainer>
    )
}

export default Step1;