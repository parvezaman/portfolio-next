import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCards from './ExperienceCards'
import ExperienceCards2 from './ExperienceCards2'
import ExperienceCards3 from './ExperienceCards3'

type Props = {}

export default function WorkExperiences({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className='h-screen flex flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>
                Experiences
            </h3>

            <div
                className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-32 scrollbar scrollbar-thumb-blue-600 scrollbar-thumb-rounded'
            >
                <ExperienceCards3 />
                <ExperienceCards />
                <ExperienceCards2 />
            </div>
        </motion.div>
    )
}