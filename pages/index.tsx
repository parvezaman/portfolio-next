/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import WorkExperiences from '../components/Experiences/WorkExperiences'
import Skills from '../components/Skills/Skills'
import Projects from '../components/Projects/Projects'
import ContactMe from '../components/ContactMe/ContactMe'
import Link from 'next/link'
import myImg from '../assets/myImages/6.jpg'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar'>
      <Head>
        <title>Portfolio: Md. Amnaullah Parvez</title>
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experiences' className='snap-center'>
        <WorkExperiences />
      </section>

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-end'>
            <img
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0'
              src={myImg.src} alt="" />
          </div>
        </footer>
      </Link>
    </div>
  )
}
