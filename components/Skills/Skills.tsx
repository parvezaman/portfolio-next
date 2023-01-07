import { motion } from 'framer-motion'
import React from 'react'
import SkillCss from './SkillCss'
import SkillHtml from './SkillHtml'
import SkillReact from './SkillReact'

type Props = {}

export default function Skills({ }: Props) {
    return (
        <motion.div className='flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:p-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>Skills</h3>

            <div className="grid grid-cols-4 gap-5">
                <SkillReact />
                <SkillHtml />
                <SkillCss />
            </div>
        </motion.div>
    )
}