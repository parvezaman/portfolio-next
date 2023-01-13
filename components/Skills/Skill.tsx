import { motion } from 'framer-motion'
import React from 'react'
import { FaReact } from 'react-icons/fa'

type Props = { skill: { name: string, icon: Element, strength: string } }

export default function Skill({ skill }: Props) {
    // console.log(skill);
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.div
                initial={{ x: -10, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
            >
                <div className='flex flex-col items-center'>
                    <>{skill.icon}</>
                    <p>
                        {skill.name}
                    </p>
                </div>

            </motion.div>
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-500 ease-in-out group-hover:bg-white h-12 w-12 md:w-12 md:h-12 xl:h-16 xl:w-16 rounded-full z'>
                <div className='flex items-center justify-center h-full'>
                    <p className='md:text-sm font-bold text-rose-400 opacity-100'>{skill.strength}</p>
                </div>
            </div>
        </div>
    )
}