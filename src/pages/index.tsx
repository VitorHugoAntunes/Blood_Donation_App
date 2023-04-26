import { InitialContainer } from "@/styles/pages/initial";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import doctorsImage from '../assets/doctors.jpg'
import donationImage from '../assets/donation.jpg'

interface ScreenProps {
  image: StaticImageData,
  title: string,
  text: string
}

function Initial() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const router = useRouter();

  const screens: ScreenProps[] = [
    {
      image: doctorsImage,
      title: "Testing",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nulla perspiciatis unde qui veritatis ex necessitatibus doloribus eum ad repellendus, ratione voluptatem sit accusantium possimus dolorem voluptate magnam harum. Dolor."
    },
    {
      image: donationImage,
      title: "Donated",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nulla perspiciatis unde qui veritatis ex necessitatibus doloribus eum ad repellendus, ratione voluptatem sit accusantium possimus dolorem voluptate magnam harum. Dolor."
    },
  ]

  function handleChangeScreen() {
    if (currentPosition === 0) {
      setCurrentPosition(currentPosition + 1)
    }

    if (currentPosition === screens.length - 1) {
      router.push("/createProfile")
    }
  }

  return (
    <InitialContainer>
      <div>
        <Link href="" onClick={() => setCurrentPosition(0)}>
          Previous
        </Link>
        <Link href="/createProfile">
          Skip
        </Link>
      </div>
      <Image src={screens[currentPosition].image} alt="" width={500} />
      <h1>{screens[currentPosition].title}</h1>
      <p>{screens[currentPosition].text}</p>
      <div>
        <div className={currentPosition === 0 ? 'position active' : 'position'}></div>
        <div className={currentPosition === 1 ? 'position active' : 'position'}></div>
      </div>

      <button onClick={handleChangeScreen}>{currentPosition !== screens.length - 1 ? 'Next' : 'Lets begin'}</button>
    </InitialContainer>
  );
}

export default Initial;