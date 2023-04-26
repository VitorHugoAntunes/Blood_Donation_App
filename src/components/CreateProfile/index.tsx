import { useState } from "react";
import { FormContainer } from "../../styles/pages/formStep1";

import axiosInstance from "@/utils/axios";

function CreateProfile() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = { name, email, mobileNumber, dateOfBirth };
        axiosInstance.post('api/users', data)
            .then(response => console.log(response.data))
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
                <input type="text" name="name" placeholder="John Doe" onChange={event => setName(event.target.value)} />

                <label htmlFor="">Email</label>
                <input type="email" name="email" placeholder="john@gmail.com" onChange={event => setEmail(event.target.value)} />

                <label htmlFor="">Mobile Number</label>
                <input type="text" name="phone" placeholder="(11) 99999-9999" onChange={event => setMobileNumber(event.target.value)} />

                <label htmlFor="">Date of Birth</label>
                <input type="date" name="dateOfBirth" placeholder="10-10-1999" onChange={event => setDateOfBirth(event.target.value)} />

                <button type="submit">Next</button>
            </form>
        </FormContainer>
    )
}

export default CreateProfile;