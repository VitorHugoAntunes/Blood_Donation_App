import { FormContainer } from "../../styles/pages/formStep1";
import { signIn } from 'next-auth/react';

import { useRouter } from "next/router";
import { useState } from "react";
import axiosInstance from "@/utils/axios";

function Step1() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            const res = await fetch('./api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            if (res.ok) {
                router.push("/home")
            }
        } catch (err) {

        }

        router.push("/home")
    }

    return (
        <FormContainer>
            <div className="profileDiv">
                <h2>Login credentials</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="john@gmail.com"
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                    required
                />

                <label htmlFor="">Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="*******"
                    onChange={event => setPassword(event.target.value)}
                    value={password}
                    required
                />

                <button type="submit">Sign in</button>
            </form>
        </FormContainer>
    )
}

export default Step1;