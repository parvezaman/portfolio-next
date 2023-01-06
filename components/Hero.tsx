import React from "react"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import HeroCircle from "./HeroCircle"
import Image from 'next/image'
import manOnBoat from '../assets/myImages/2.jpg'
import Link from "next/link"

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["<Assalamu Alaikum... />", "`I'm ${ Md Amanullah Parvez }`", "<Software Engineer />", "<GIS Enthusiast />", "<Loves Coffee />", "<CognoScenti />"],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">

            <HeroCircle />

            <Image
                style={{
                    border: "1px solid grey"
                }}
                className="relative rounded-full h-40 w-40 mx-auto object-cover"
                src={manOnBoat}
                alt="image of Aman"
            />
            {/* <br /> */}
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-400 pb-2 tracking-[16px]">
                    SOFTWARE ENGINEER
                </h2>
                <h1 className="text-2xl lg:text-5xl font-semibold px-10">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#ffa0a0" />
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#experiences">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}