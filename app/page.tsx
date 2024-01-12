import Image from 'next/image'
import Header from './Components/Header'
import Hero from './Components/Hero'
import TechStack from './Components/TechStack'
import About from './Components/About'


export default function Home() {
  return (
    <main className="mt-36 font-PlayfairDisplay">
      <Header/>
      <section id='#home'>
      <Hero/>
      </section>
      <section>
      <TechStack/>
      </section>
      
      <section className='my-56' id='#about'>
      <About/>
      </section>
    </main>
  )
}
