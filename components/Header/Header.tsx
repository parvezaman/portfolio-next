import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaStackOverflow } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='p-5 sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    speed: .5
                }}
                transition={{ duration: 1.5 }}
                className='flex flex-row items-center'
            >
                {/* social media icons go here */}
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/parvez.aman.18/"
                >
                    <FaFacebookF
                        style={{ color: "grey", fontSize: 28, margin: 8 }}
                    />
                </a>

                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/md-amanullah-parvez-10a543207/"
                >
                    <FaLinkedinIn
                        style={{ color: "grey", fontSize: 28, margin: 8 }}
                    />
                </a>

                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/parvezaman"
                >
                    <FaGithub
                        style={{ color: "grey", fontSize: 28, margin: 8 }}
                    />
                </a>

                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://stackoverflow.com/users/16839088/amanullah"
                >
                    <FaStackOverflow
                        style={{ color: "grey", fontSize: 28, margin: 8 }}
                    />
                </a>

                {/* <SocialIcon target="_blank" url='' /> */}
            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    speed: .5
                }}
                transition={{ duration: 1.5 }}
                className='flex flex-row items-center text-gray-300 cursor-pointer'
            >
                <a
                    className='flex items-center'
                    href="mailto:parvezaman@outlook.com"
                >
                    <HiMail
                        style={{ color: "#ab5403", fontSize: 28, margin: 8 }}
                    />
                    <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>email me!</p>
                </a>
            </motion.div>
        </header>
    )
}