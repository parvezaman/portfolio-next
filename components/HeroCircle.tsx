import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function HeroCircle({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [.1, .2, .4, .8, .1, 1],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"]
            }}
            transition={{
                duration: 3
            }}
            className='relative flex justify-center items-center'
        >
            <div className="absolute border border-[#dacece] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
            <div className="absolute border border-[#555555] rounded-full h-[300px] w-[300px] mt-52 animate-pulse" />
            <div className="absolute border border-[#4e4e4e] rounded-full h-[500px] w-[500px] mt-52 animate-pulse" />
            <div className="absolute border border-[#794b4b] rounded-full h-[650px] w-[650px] mt-52 animate-pulse" />
            <div className="absolute border border-[#555555] rounded-full h-[800px] w-[800px] mt-52 animate-pulse" />
        </motion.div>
    )
}