import { HomeContainer, ListContainer, TopContainer } from "@/styles/pages/home";
import axiosInstance from "@/utils/axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import cookies from 'js-cookie';

import { FiMessageCircle, FiMenu, FiSearch, FiLoader } from 'react-icons/fi'
import * as ToggleGroup from '@radix-ui/react-toggle-group';

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
    const [loadingUsers, setLoadingUsers] = useState(true);
    const [bloodTypeFilter, setBloodTypeFilter] = useState("");
    const [userCookieSession, setUserCookieSession] = useState<string>('');

    const router = useRouter()

    useEffect(() => {
        async function FetchData() {
            const response = await axiosInstance.get('./api/getAllUsers')
            setUsers(response.data)
            setLoadingUsers(false);
        }

        FetchData();
    }, [])

    useEffect(() => {
        const token = cookies.get('token');

        setUserCookieSession(token!)
        console.log(token)
    }, [])


    console.log(users)

    const buttonTypes = [{ type: "A+" }, { type: "A-" }, { type: "B+" }, { type: "B-" }, { type: "AB+" }, { type: "AB-" }, { type: "O+" }, { type: "O-" },]

    const filteredUsers = bloodTypeFilter === "" ?
        users.filter(filteredUser => filteredUser.bloodType.includes("")) :
        users.filter(filteredUser => filteredUser.bloodType == bloodTypeFilter);

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
                <ToggleGroup.Root className="buttonsDiv" type="single" onValueChange={(value) => setBloodTypeFilter(value)}>
                    {buttonTypes.map(button => (
                        <ToggleGroup.Item key={button.type} className="toggleItem" value={button.type}>{button.type}</ToggleGroup.Item>
                    ))}
                </ToggleGroup.Root>
                <div className="usersDiv">
                    {loadingUsers === true ? (
                        <div className="loadingDiv">
                            <span>Loading</span>
                            <FiLoader size={24} />
                        </div>
                    ) :
                        filteredUsers.map(user => (
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

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const { req } = context;
//     const userCookie = req.headers.cookie
//     const token = userCookie?.split('=')[1];
//     return {
//         props: {
//             token
//         }
//     }
// }