import Feature from '@/components/feature'
import Hero from '@/components/hero'
import Social from '@/components/social'
import Testimonials from '@/components/testimonials'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero />
        <Social />
        <Feature />
        <Testimonials />
    </main>
  )
}
