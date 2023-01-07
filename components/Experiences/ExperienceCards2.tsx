import React from 'react'
import { motion } from 'framer-motion'
import hdd from '../../assets/experiences/hdd.png'
import { GiSattelite, GiWireframeGlobe } from 'react-icons/gi';
import { SiAcademia, SiMicrosoftoffice } from 'react-icons/si';

type Props = {}

function ExperienceCards2({ }: Props) {
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
                src={hdd.src}
                alt=""
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>
                    Geographic Information Systems Associate
                </h4>
                <p className='text-xl font-bold mt-1'>
                    Shanghai Huadu Architecture & Urban Design Co., Ltd. (HDD)
                </p>

                <div className='flex space-x-2 my-2'>
                    <GiSattelite
                        style={{ color: "#ab5403", fontSize: 28, margin: 8 }}
                    />
                    <GiWireframeGlobe
                        style={{ color: "#ab5403", fontSize: 28, margin: 8 }}
                    />
                    <SiAcademia
                        style={{ color: "#ab5403", fontSize: 28, margin: 8 }}
                    />
                    <SiMicrosoftoffice
                        style={{ color: "#ab5403", fontSize: 28, margin: 8 }}
                    />

                </div>

                <p className='uppercase py-5 text-gray-300'>
                    Nov 2020 - May 2021
                </p>

                <p>
                    I worked with a team working for &quot;Jolshiri Abashon Prokolpo&quot;, a housing scheme for Bangladesh Army officers. We worked especially with Water Supply systems and Drainage and Sewerage systems.
                </p>
            </div>
        </article>
    )
}

export default ExperienceCards2