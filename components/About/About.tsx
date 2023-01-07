import React from 'react'
import { motion } from 'framer-motion'
import myImg from '../../assets/myImages/6.jpg'
import Image from 'next/image'

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>
                About
            </h3>

            <motion.img
                src={myImg.src}
                initial={{
                    x: -200,
                    opacity: 0,
                    // borderRadius: 0,

                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                    // borderRadius: "50%",
                    // width: "12rem",
                    // height: "12rem",
                    // height: 56
                }}
                transition={{
                    duration: 1.5
                }}
                // viewport={{ once: true }}
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:h-[500px] xl:w-[600px]"
            />

            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-2xl font-semibold text-gray-400'>
                    Let me {" "}
                    <span className='underline decoration-[#0de4c0] text-emerald-600 uppercase'>tell</span>
                    {" "} you something...
                </h4>
                <p className='text-sm'>
                    My name is Md. Amanullah Parvez. I have completed my graduation in <span className='text-red-400'>Urban and Regional Planning</span> from Chittagong University of Engineering and Technology <span className='text-red-400'>(CUET)</span>, Chittagong, Bangladesh. One of the reputed Universities in Bangladesh. But while studying there I found out planning Cities and controlling human behaviour in this way we usually do, is not my thing. So I wanted to build my career in Geographic Information System<span className='text-red-400'> (GIS)</span>. That&apos;s when I needed <span className='text-red-400'>Python</span> to do data analysis. And that&apos;s how I entered the <span className='text-red-400'>Programming World!</span>. And I found my passion and what my heart desires. Then I taught myself programming and eventually <span className='text-red-400'>Web Development</span>...
                </p>
            </div>
        </motion.div>
    )
}