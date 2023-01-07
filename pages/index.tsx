import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import WorkExperiences from '../components/Experiences/WorkExperiences'
import Skills from '../components/Skills/Skills'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Portfolio: Md. Amnaullah Parvez</title>
      </Head>
      {/* Header component goes here */}
      <Header />

      {/* Hero component goes here */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About component goes here */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      <section id='experiences' className='snap-center'>
        <WorkExperiences />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills />
      </section>
      {/* Projects */}

      {/* Contact me */}
    </div>
  )
}
