import { FormContainer } from "../../../styles/pages/formStep1";

import { useFormContext } from "@/hooks/useFormData";
import { useRouter } from "next/router";
import Image from "next/image";

function Step1() {
    const router = useRouter();

    const {
        name,
        email,
        mobileNumber,
        profilePicture,
        setName,
        setEmail,
        setMobileNumber,
        setProfilePicture
    } = useFormContext()


    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        router.push("/createProfile/step2")

    }

    return (
        <FormContainer>
            <div className="profileDiv">
                <h2>Create profile</h2>
            </div>
            <div className="profilePictureDiv">
                {profilePicture !== "" ? (
                    <Image src={profilePicture} alt="Your profile picture" width={200} height={200} />
                ) : (
                    <div></div>
                )}
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    onChange={event => setName(event.target.value)}
                    value={name}
                    required
                />

                <label htmlFor="">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="john@gmail.com"
                    onChange={event => setEmail(event.target.value)}
                    value={email}
                    required
                />

                <label htmlFor="">Mobile Number</label>
                <input
                    type="text"
                    name="phone"
                    placeholder="(11) 99999-9999"
                    onChange={event => setMobileNumber(event.target.value)}
                    value={mobileNumber}
                    required
                />

                <label htmlFor="">Your profile url</label>
                <input
                    type="text"
                    name="profilePicture"
                    placeholder="https://avatars.githubusercontent.com"
                    onChange={event => setProfilePicture(event.target.value)}
                    value={profilePicture}
                    required
                />

                <button type="submit">Next</button>
            </form>
        </FormContainer>
    )
}

export default Step1;