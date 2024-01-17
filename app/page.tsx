import Image from 'next/image'
import Header from './Components/Header'
import Hero from './Components/Hero'
import TechStack from './Components/TechStack'
import About from './Components/About'
import PersonalProjects from './Components/PersonalProjects'
import ContactMe from './Components/ContactMe'


export default function Home() {
  return (
    <main className="font-PlayfairDisplay">
      <Header />
      <section className='pt-36' id='home'>
        <Hero />
        <TechStack />
      </section>

      <section className='py-36' id='about'>
        <About />
      </section>


      <section className='py-28' id='projects'>
        <PersonalProjects />
      </section>
      
      <section className='pt-' id='contact'>
        <ContactMe />
      </section>
    </main>
  )
}
