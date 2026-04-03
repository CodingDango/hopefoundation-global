import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Together, We Can Change Lives
            </h1>
            <p className="text-pretty text-lg text-muted-foreground md:text-xl">
              Join us in our mission to bring hope and support to communities in need. Every contribution makes a lasting impact.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="rounded-lg px-8 py-6 text-base">
                Donate Now
              </Button>
              <Button variant="outline" size="lg" className="rounded-lg px-8 py-6 text-base">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-muted" aria-label="Hero image placeholder" />
          </div>
        </div>
      </div>
    </section>
  )
}
