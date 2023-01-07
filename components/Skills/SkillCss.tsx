import { motion } from 'framer-motion'
import React from 'react'
import { FaCss3, FaHtml5, FaReact } from 'react-icons/fa'

type Props = { directionLeft?: boolean }

export default function SkillCss({ directionLeft }: Props) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.div
                initial={{ x: -200, opacity: 0 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, x: 0 }}
            >
                <FaCss3 className='h-24 w-24 text-[#254bdd] md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-500 ease-in-out' />
            </motion.div>
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-500 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:h-32 xl:w-32 rounded-full z'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>70%</p>
                </div>
            </div>
        </div>
    )
}