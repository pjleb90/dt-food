import CTA from '@/components/call-to-action'
import Feature from '@/components/feature'
import Gallery from '@/components/gallery'
import Hero from '@/components/hero'
import Testimonials from '@/components/testimonials'

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between bg-white dark:bg-black">
        <Hero />
        <Gallery />
        <Feature />
        <Testimonials />
        <CTA />
    </main>
  )
}
