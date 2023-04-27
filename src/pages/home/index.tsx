import { HomeContainer, ListContainer, TopContainer } from "@/styles/pages/home";
import axiosInstance from "@/utils/axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMessageCircle, FiMenu, FiSearch } from 'react-icons/fi'

interface User {
    id: number;
    name: string;
    email: string;
    mobileNumber: string;
    dateOfBirth: string;
    bloodType: string;
}

function Home() {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        async function FetchData() {
            const response = await axiosInstance.get('./api/getAllUsers')
            setUsers(response.data)
        }

        FetchData();
    }, [])

    console.log(users)

    const buttonTypes = [{ type: "A+" }, { type: "A-" }, { type: "B+" }, { type: "B-" }, { type: "AB+" }, { type: "AB-" }, { type: "O+" }, { type: "O-" },]

    return (
        <HomeContainer>
            <TopContainer>
                <div className="navigationDiv">
                    <button><FiMenu size={24} /></button>
                    <h2>Home</h2>
                    <div className="profile"></div>
                </div>
                <div className="searchBar">
                    <input type="text" placeholder="Search..." />
                    <FiSearch size={24} />
                </div>
            </TopContainer>

            <ListContainer>
                <div className="buttonsDiv">
                    {buttonTypes.map(button => (
                        <button key={button.type}>{button.type}</button>
                    ))}
                </div>
                <div className="usersDiv">
                    {users.map(user => (
                        <div key={user.id}>
                            <div>
                                <Image src="https://avatars.githubusercontent.com/u/51717305?v=4" alt="" width={100} height={100} />
                                <div>
                                    <h4>{user.name}</h4>
                                    <span>São Paulo</span>
                                </div>
                            </div>
                            <div>
                                <strong className="userBloodType">{user.bloodType}</strong>
                                <button><FiMessageCircle size={24} /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </ListContainer>
        </HomeContainer>
    )
}

export default Home;