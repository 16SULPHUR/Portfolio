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

      {/* <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="iankitpatil" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://in.linkedin.com/in/iankitpatil?trk=profile-badge">Ankit Patil</a></div>
              

      <script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript"></script> */}
    </main>
  )
}
