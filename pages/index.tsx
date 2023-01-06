import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'

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

      {/* Skills */}

      {/* Projects */}

      {/* Contact me */}
    </div>
  )
}
