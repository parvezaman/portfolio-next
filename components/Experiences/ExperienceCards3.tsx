import { motion } from 'framer-motion'
import React from 'react'
import sbit from "../../assets/experiences/sbit.jpg"
import { TbBrandJavascript } from "react-icons/tb";
import { FaCss3, FaHtml5 } from 'react-icons/fa';
import { SiCodeigniter, SiMysql, SiPhp } from "react-icons/si";


type Props = {}

export default function ExperienceCards3({ }: Props) {
    return (
        <article
            className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-1000 overflow-hidden'
        >
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0
                }}
                transition={{
                    duration: 2
                }}
                whileInView={{
                    y: 0,
                    opacity: 1
                }}
                // viewport={{once: true}}
                className='h-32 w-32 rounded-full xl:h-[200px] xl:w-[200px] object-cover object-center'
                src={sbit.src}
                alt=""
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>
                    Web Application Developer
                </h4>
                <p className='text-xl font-bold mt-1'>
                    SBIT WLL
                </p>

                <div className='flex space-x-2 my-2'>
                    <FaHtml5
                        style={{ color: "#ab5403", fontSize: 28, margin: 8 }}
                    />
                    <FaCss3
                        style={{ color: "#ab5403", fontSize: 28, margin: 8 }}
                    />
                    <TbBrandJavascript
                        style={{ color: "#ab5403", fontSize: 28, margin: 8 }}
                    />
                    <SiPhp
                        style={{ color: "#ab5403", fontSize: 28, margin: 8 }}
                    />
                    <SiCodeigniter
                        style={{ color: "#ab5403", fontSize: 28, margin: 8 }}
                    />
                    <SiMysql
                        style={{ color: "#ab5403", fontSize: 28, margin: 8 }}
                    />
                </div>

                <p className='uppercase py-5 text-gray-300'>
                    February 2023 - Present
                </p>

                <p>
                    Attire Collectio is a ecommerce platform based in Kingdom of Bahrain. I have been working on the backend of the mobile app of the site. As an ecommerce site it serves functionalities like customer management, vendor management, order management, payment getway and others.
                </p>
                <p>
                    Performed tasks like: Custom page building, Supplying API for different purposes, Database handling, Bug fixing and optimizations etc.
                </p>
            </div>
        </article>
    )
}