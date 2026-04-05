import { HeroSection } from "@/components/sections/home/hero"
import { ImpactSection } from "@/components/sections/home/impact"
import { TestimonialSection } from "@/components/sections/home/testimonial"
import { CTASection } from "@/components/sections/home/cta"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ImpactSection />
      <TestimonialSection />
      <CTASection />
    </>
  )
}
