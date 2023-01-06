import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='p-5 sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    y: -50,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    speed: .5
                }}
                transition={{ duration: 1.5 }}
                className='flex flex-row items-center'
            >
                {/* social media icons go here */}
                <SocialIcon
                    target="_blank"
                    bgColor='transparent'
                    fgColor='grey'
                    url='https://www.facebook.com/parvez.aman.18/'
                />

                <SocialIcon
                    target="_blank"
                    bgColor='transparent'
                    fgColor='grey'
                    url='https://www.linkedin.com/in/md-amanullah-parvez-10a543207/'
                />
                {/* <SocialIcon target="_blank" url='' /> */}
            </motion.div>

            <motion.div
                initial={{
                    y: 50,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    speed: .5
                }}
                transition={{ duration: 1.5 }}
                className='flex flex-row items-center text-gray-300 cursor-pointer'
            >
                <SocialIcon
                    className='cursor-pointer'
                    bgColor='transparent'
                    fgColor='grey'
                    network='email'
                    target="_blank"
                    url=''
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Let&apos;s have a chat</p>
            </motion.div>
        </header>
    )
}