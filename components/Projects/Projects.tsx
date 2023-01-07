/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

export default function Projects({ }: Props) {
    const myProjects = [
        {
            id: 1,
            title: "Shop & Shoot",
            description: "This is a niche website, dedicated to sell cameras. This site has features like, Fully responsible to the dasktop and mobile devices.Home page shows only 6 products; all products are in All Cameras tab.Buy Me Now button will take you through a private route. ie. after loging in or registration you will be redirected to the exact place where yhou wanted to go. Purchase page will show you details of the product you are about to buy as well as it will take your shipping address. Your login info will be saved into our MongoDB database. DashBoard has two types of routing ie. public and admin. If You are a admin you can access the database like you cane add new product, delete any product, modify or cancel orders etc. public bashboard shows payment, my orders, review and logout",
            link: "https://shop-and-shoot.web.app/",
            image: "https://i.ibb.co/BPW0cCB/1-1-Carousel.jpg",
            techsUsed: ['Axios', 'DotEnv', 'Express', 'Firebase', 'Material UI', 'MongoDb', 'React', 'Bootstrap', 'React Icons', 'REST API']
        },
        {
            id: 2,
            title: "Travel the World",
            description: "TravelTheWorld is a Tourism management site. A company has taken the responsibility to assure you the cheapest and safest tourism around the globe. We will guide you through our own tour guides as well as assuring your habitat and eatings throughout the travelling time. This website has features like, Fully Responsible to your device.Home page has the services we provide. You can book your desired package/packages right from the home page. You can see Your Bookings if you are logged in. If not, don't worry we will take you through login.You also can see all bookings page (management page). Booking page shows details info of the package and conformation form. After filling the form your desired package will be stored in our database.database is hosted in Heroku",
            link: "https://travel-the-world-11a88.web.app/",
            image: "https://i.ibb.co/41mHwdP/3.jpg",
            techsUsed: ['Axios', 'Dotenv', 'Express', 'Firebase', 'MongoDb', 'React', 'Bootstrap', 'React Hook Form', 'React Icons', 'REST API']
        },
        {
            id: 3,
            title: "Build your MAC",
            description: "A tamplate website to do pricing of a product based on various services associated with the product. In this particular project a Mac Book was taked as example. Based on Memory, Storage and delivary option price can be varied. Also there is a Cupon system. By providing specific Cupon 20% discount will be applied. In this case the cupon code is 'stevekaku'. Give it a try!",
            link: "https://assignment-5-parvezaman.netlify.app/",
            image: "https://i.ibb.co/6sbzdFx/1-1-bg.jpg",
            techsUsed: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap']
        },
    ]
    return (
        <motion.div
            initial={{
                x: -200,
                opacity: 0
            }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            transition={{ duration: 2 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>Projects</h3>

            {/* all projects goes here */}
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thumb-blue-600 scrollbar-thumb-rounded'>
                {
                    myProjects.map((project) => (
                        <div
                            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'
                            key={project.id}
                        >
                            <motion.img
                                initial={{ y: -100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 2 }}
                                src={project.image}
                                // style={{height: 300}}
                                className="h-24 md:h-72"
                                alt=""
                            />

                            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                <h4 className='text-4xl font-semibold text-center'>
                                    <span className='underline decoration-[#F7AB0A]/40'>
                                        {project.title}
                                    </span>
                                </h4>

                                <p className='text-sm text-center md:text-left'>{project.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

            {/* make a diagonal rectengle/bar */}
            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
        </motion.div >
    )
}