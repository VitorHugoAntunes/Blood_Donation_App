import { FormContainer } from "../../styles/pages/formStep1";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCurrentUserContext } from "@/hooks/useCurrentUser";
import axiosInstance from "@/utils/axios";

function Step1() {
    const { currentUserId, updateContextValue } = useCurrentUserContext();
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [incorrectCredentials, setIncorrectCredentials] = useState<boolean>(false)

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        try {
            const response = await axiosInstance.post('./api/login', {
                email: email,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.status === 401) {
                console.log("Credenciais incorretas")
            } else if (response.status === 200) {
                setIncorrectCredentials(false)
                const data = await response.data;
                updateContextValue(data.id);
                router.push("/home");
            }

        } catch (error) {
            console.error(error as Error)
            setIncorrectCredentials(true)
        }
    }

    useEffect(() => {
        console.log(`O retorno do contexto: ${currentUserId}`)
        localStorage.setItem("currentUserId", currentUserId);
    }, [currentUserId])

    return (
        <FormContainer>
            <div className="profileDiv">
                <h2>Login credentials</h2>
            </div>
            <form onSubmit={handleSubmit}>
                {incorrectCredentials === true && (
                    <p>Email or password is incorrect</p>
                )}
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