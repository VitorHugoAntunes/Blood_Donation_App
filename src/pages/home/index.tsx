import { HomeContainer, ListContainer, TopContainer } from "@/styles/pages/home";
import axiosInstance from "@/utils/axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import cookies from 'js-cookie';
import ReactWhatsapp from 'react-whatsapp';

import { FiMessageCircle, FiMenu, FiSearch, FiLoader, FiX } from 'react-icons/fi'
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { useCurrentUserContext } from "@/hooks/useCurrentUser";
import axios from "axios";
import Link from "next/link";

interface User {
    id: number;
    name: string;
    email: string;
    mobileNumber: string;
    dateOfBirth: string;
    bloodType: string;
    profilePicture: string;
    city: string;
    state: string;
}

function Home() {
    const [users, setUsers] = useState<User[]>([]);
    const [loadingUsers, setLoadingUsers] = useState(true);
    const [bloodTypeFilter, setBloodTypeFilter] = useState("");
    const [currentLoggedUser, setCurrentLoggedUser] = useState<User>({} as User);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [profileOptionsOpen, setProfileOptionsOpen] = useState<boolean>(false);
    const [searchValueCity, setSearchValueCity] = useState('');

    const router = useRouter()

    useEffect(() => {
        if (currentLoggedUser) {
            localStorage.getItem("currentUser")
        }

        async function FetchLoggedUser() {
            const currentLoggedUserId = localStorage.getItem("currentUserId")
            if (!currentLoggedUserId) {
                console.log("UserID is missing! No user logged in");
                router.push("/login");

            } else {
                const response = await axios.get(`./api/${currentLoggedUserId}`);
                console.log(response)
                const loggedUser: User = await response.data;
                console.log(loggedUser)
                if (loggedUser) {
                    setCurrentLoggedUser(() => loggedUser);
                    localStorage.setItem("currentUser", JSON.stringify(currentLoggedUser));
                    console.log("Usuario logado: ");
                    console.log(currentLoggedUser);
                }
            }
        }

        FetchLoggedUser();

        async function FetchData() {
            const response = await axiosInstance.get('./api/getAllUsers')
            setUsers(response.data)
            setLoadingUsers(false);
        }

        FetchData();

    }, [loadingUsers])

    console.log(users)

    const buttonTypes = [{ type: "A+" }, { type: "A-" }, { type: "B+" }, { type: "B-" }, { type: "AB+" }, { type: "AB-" }, { type: "O+" }, { type: "O-" },]

    const filteredUsersByBloodType = bloodTypeFilter === "" ?
        users.filter(filteredUser => filteredUser.bloodType.includes("")) :
        users.filter(filteredUser => filteredUser.bloodType == bloodTypeFilter);

    const filteredUsers = filteredUsersByBloodType.filter(user => user.city.toLowerCase().includes(searchValueCity.toLowerCase()))
    console.log(searchValueCity)
    console.log(filteredUsers)

    function changeMenuStatus() {
        menuOpen === true ? setMenuOpen(false) : setMenuOpen(true)
    }

    function logOutUser() {
        cookies.remove('token');
        localStorage.removeItem('currentUserId');
    }

    return (
        <HomeContainer>
            <TopContainer>
                <div className="navigationDiv">
                    <button onClick={changeMenuStatus}><FiMenu size={24} /></button>
                    <div className={menuOpen === true ? 'menuDiv open' : 'menuDiv'}>
                        <div>

                            <button onClick={changeMenuStatus}>
                                <FiX size={24} />
                            </button>
                            <Link href="https://www.gov.br/saude/pt-br/composicao/saes/sangue" target={"_blank"}>Como doar sangue?</Link>
                            <Link href="https://github.com/VitorHugoAntunes/Blood_Donation_App" target={"_blank"}>Github deste projeto</Link>
                        </div>
                        <span>Next version: 13.3.1</span>
                    </div>
                    <h2>Home</h2>
                    <div className="profile">
                        <Image
                            src={currentLoggedUser!.profilePicture}
                            alt=""
                            width={20}
                            height={20}
                            onClick={() => profileOptionsOpen === true ? setProfileOptionsOpen(false) : setProfileOptionsOpen(true)}
                        />

                        <div className={profileOptionsOpen === true ? "profileMenuOptions open" : "profileMenuOptions"}>
                            <span>Logado como: <strong>{currentLoggedUser.name}</strong></span>
                            <Link href={"/login"} onClick={logOutUser}>Sair da conta</Link>
                        </div>
                    </div>
                </div>
                <div className="searchBar">
                    <input type="text" placeholder="Search by city..." onChange={(event) => setSearchValueCity(event.target.value)} value={searchValueCity} />
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
                                        <span>{user.city}</span>
                                    </div>
                                </div>
                                <div>
                                    <strong className="userBloodType">{user.bloodType}</strong>
                                    <ReactWhatsapp
                                        element="button"
                                        number={user.mobileNumber}
                                        message="Olá! Observei que você está cadastrado(a) no aplicativo de doadores de sangue. Se possível, gostaria de saber se você poderia ajudar. :)"
                                    >
                                        <FiMessageCircle size={24} />
                                    </ReactWhatsapp>

                                </div>
                            </div>
                        ))}

                </div>
            </ListContainer>
        </HomeContainer>
    )
}

export default Home;