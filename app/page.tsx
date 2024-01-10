import Image from 'next/image'
import Header from './Components/Header'
import Hero from './Components/Hero'


export default function Home() {
  return (
    <main className="mt-36">
      <Header/>
      <Hero/>
    </main>
  )
}
