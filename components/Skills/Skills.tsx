import { motion } from 'framer-motion'
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { SiApollographql, SiBootstrap, SiGit, SiGooglechrome, SiGraphql, SiMaterialui, SiMongodb, SiPostgresql, SiReactrouter, SiRedux, SiTailwindcss, SiVisualstudiocode } from 'react-icons/si'
import { TbApi, TbBrandJavascript } from 'react-icons/tb'
import Skill from './Skill'


type Props = {}

export default function Skills({ }: Props) {
    const classes = 'h-8 w-8 text-rose-400 md:w-12 md:h-12 xl:w-16 xl:h-16 filter group-hover:grayscale transition duration-500 ease-in-out'
    const mySkills = [
        {
            id: 1,
            name: "React.Js",
            strength: "comfy",
            icon: <FaReact className={classes} />
        },
        {
            id: 2,
            name: "JavaScript",
            strength: "comfy",
            icon: <TbBrandJavascript className={classes} />
        },
        {
            id: 3,
            name: "Material-UI",
            strength: "comfy",
            icon: <SiMaterialui className={classes} />
        },
        {
            id: 4,
            name: "TailwindCSS",
            strength: "comfy",
            icon: <SiTailwindcss className={classes} />
        },
        {
            id: 5,
            name: "BootStrap",
            strength: "comfy",
            icon: <SiBootstrap className={classes} />
        },
        {
            id: 6,
            name: "Node.Js",
            strength: "fam",
            icon: <FaNodeJs className={classes} />
        },
        {
            id: 7,
            name: "Redux",
            strength: "fam",
            icon: <SiRedux className={classes} />
        },
        {
            id: 8,
            name: "React Router",
            strength: "fam",
            icon: <SiReactrouter className={classes} />
        },
        {
            id: 9,
            name: "GraphQL",
            strength: "fam",
            icon: <SiGraphql className={classes} />
        },
        {
            id: 10,
            name: "Apollo",
            strength: "fam",
            icon: <SiApollographql className={classes} />
        },
        {
            id: 11,
            name: "RESTful API",
            strength: "fam",
            icon: <TbApi className={classes} />
        },
        {
            id: 12,
            name: "MongoDB",
            strength: "fam",
            icon: <SiMongodb className={classes} />
        },
        {
            id: 13,
            name: "PostgreSQL",
            strength: "fam",
            icon: <SiPostgresql className={classes} />
        },
        {
            id: 14,
            name: "HTML5",
            strength: "fam",
            icon: <FaHtml5 className={classes} />
        },
        {
            id: 15,
            name: "CSS3",
            strength: "fam",
            icon: <FaCss3 className={classes} />
        },
        {
            id: 16,
            name: "git",
            strength: "comfy",
            icon: <SiGit className={classes} />
        },
        {
            id: 16,
            name: "git",
            strength: "comfy",
            icon: <SiGit className={classes} />
        },
        {
            id: 17,
            name: "Dev tool",
            strength: "comfy",
            icon: <SiGooglechrome className={classes} />
        },
        {
            id: 18,
            name: "VS Code",
            strength: "comfy",
            icon: <SiVisualstudiocode className={classes} />
        },
    ]
    return (
        <motion.div className='flex flex-col relative text-center md:text-left xl:flex-row max-w-[2000px] xl:p-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl'>rigs</h3>

            <div className="grid grid-cols-4 gap-5 place-items-center">
                {
                    mySkills.map(skill => <Skill key={skill.id} skill={skill} />)
                }
            </div>
        </motion.div>
    )
}