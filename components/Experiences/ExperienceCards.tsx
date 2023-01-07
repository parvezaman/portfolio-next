import { motion } from 'framer-motion'
import React from 'react'
import mimothi from "../../assets/experiences/mimothi.png"
import { TbBrandJavascript } from "react-icons/tb";
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMaterialui, SiGraphql, SiPostgresql } from "react-icons/si";


type Props = {}

export default function ExperienceCards({ }: Props) {
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
                src={mimothi.src}
                alt=""
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>
                    Jr. Software Engineer
                </h4>
                <p className='text-xl font-bold mt-1'>
                    Mimothi Solutions Private Limited
                </p>

                <div className='flex space-x-2 my-2'>
                    <TbBrandJavascript
                        style={{ color: "#ab5403", fontSize: 28, margin: 8 }}
                    />
                    <FaReact
                        style={{ color: "#ab5403", fontSize: 28, margin: 8 }}
                    />
                    <FaNodeJs
                        style={{ color: "#ab5403", fontSize: 28, margin: 8 }}
                    />
                    <SiMaterialui
                        style={{ color: "#ab5403", fontSize: 28, margin: 8 }}
                    />
                    <SiGraphql
                        style={{ color: "#ab5403", fontSize: 28, margin: 8 }}
                    />
                    <SiPostgresql
                        style={{ color: "#ab5403", fontSize: 28, margin: 8 }}
                    />
                </div>

                <p className='uppercase py-5 text-gray-300'>
                    July 2022 - Present
                </p>

                <p>
                    I worked on a SAAS project called “Change Assessment Tool” which can assess changes of different projects of a company regarding affected business units of the company, forecast risks for different business units and generate necessary reports and many more.
                </p>
                <p>
                    Performed tasks like: Responsive layouts for different screens, MUI custom theming and overriding, Report generation (.xlsx and .pdf)in backend, Notification system using context API, Database handling for different purposes, Bug fixing and optimizations etc.
                </p>
            </div>
        </article>
    )
}