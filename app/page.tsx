import { HomeHero } from "@/components/sections/home/home-hero"
import { ImpactSection } from "@/components/sections/home/impact"
import { TestimonialSection } from "@/components/sections/home/testimonial"
import { CTASection } from "@/components/sections/home/cta"

export default function Home() {
  return (
    <>
      <HomeHero />
      <ImpactSection />
      <TestimonialSection />
      <CTASection />
    </>
  )
}
