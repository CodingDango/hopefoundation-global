import { Button } from "@/components/ui/button";
import { Container } from "../../container";
import { DonationPreview } from "@/components/donation-modal";
import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-background h-full min-h-144 lg:min-h-200">
      <Image
        fill
        src={"/hero-background.jpg"}
        alt="Hero image"
        className="absolute object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle,_transparent_0%,_rgba(0,0,0,0.4)_70%,_rgba(0,0,0,0.9)_100%)]" />

      <Container className="relative flex items-center h-full min-h-144 lg:min-h-192">
        <div className="text-center sm:text-start flex flex-col gap-8 max-w-3xl">
          <div className="space-y-4">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              Together, We Can Change Lives
            </h1>
            <p className="text-pretty text-lg text-primary-foreground/80 md:text-xl">
              Join us in our mission to bring hope and support to communities in
              need. Every contribution makes a lasting impact.
            </p>
          </div>
          <div className="flex gap-4 justify-center sm:justify-start">
            <DonationPreview>
              <Button size={"xl"}>Donate Now</Button>
            </DonationPreview>
            <Button size={"xl"} variant="outline" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
