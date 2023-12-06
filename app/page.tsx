import Feature from '@/components/feature'
import Hero from '@/components/hero'
import Social from '@/components/social'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-white dark:bg-black">
        <Hero />
        <Social />
        <Feature />
        <Testimonials />
    </main>
  )
}
