import { useState } from "react";
import { FormContainer } from "../../../styles/pages/formStep1";

import { useFormContext } from "@/hooks/useFormData";
import { useRouter } from "next/router";

function Step1() {
    const router = useRouter();
    const [confirmedPassword, setConfirmedPassword] = useState("");

    const {
        city,
        state,
        password,
        dateOfBirth,
        setCity,
        setState,
        setPassword,
        setDateOfBirth
    } = useFormContext()


    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (password === confirmedPassword) {
            router.push("/createProfile/step3")
        } else {
            throw new Error("Passwords are not equals.")
        }

    }

    return (
        <FormContainer>
            <div className="profileDiv">
                <h2>Create profile</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Date of Birth</label>
                <input
                    type="date"
                    name="dateOfBirth"
                    placeholder="10-10-1999"
                    onChange={event => setDateOfBirth(event.target.value)}
                    value={dateOfBirth}
                    required
                />

                <div className="userLocationDiv">
                    <div>
                        <label htmlFor="">City</label>
                        <input
                            type="text"
                            name="city"
                            placeholder="Sao Paulo"
                            onChange={event => setCity(event.target.value)}
                            value={city}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="">State</label>
                        <input
                            type="text"
                            name="state"
                            placeholder="SP"
                            onChange={event => setState(event.target.value)}
                            value={state}
                            required
                        />
                    </div>
                </div>

                <label htmlFor="">Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="*******"
                    onChange={event => setPassword(event.target.value)}
                    value={password}
                    required
                />

                <label htmlFor="">Confirm password</label>
                <input
                    type="password"
                    name="confirmedPassword"
                    placeholder="*******"
                    onChange={event => setConfirmedPassword(event.target.value)}
                    value={confirmedPassword}
                    required
                />

                <button type="submit">Next</button>
            </form>
        </FormContainer>
    )
}

export default Step1;