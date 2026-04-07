import { Container } from "@/components/container";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-muted/50 h-full">
      <Image src='/contact-us.jpg' alt="A team of helpers object-cover" fill className="object-cover"/>
      <div className="absolute inset-0 bg-black/50" />
      <Container>
        <div className="space-y-4 relative">
          <h1 className="text-balance text-5xl md:text-6xl font-bold tracking-tight text-primary-foreground">
            Get In Touch
          </h1>
          <p className="text-pretty text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
            Have questions or want to learn more about HopeFoundation? We&apos;d
            love to hear from you. Reach out anytime.
          </p>
        </div>
      </Container>
    </section>
  );
}
