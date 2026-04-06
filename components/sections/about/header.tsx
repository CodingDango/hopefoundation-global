import { Container } from "@/components/container";
import Image from "next/image";

export function Header() {
  return (
    <section className="bg-background">
      <Container>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-center md:text-start">
              About Us
            </h1>
            <p className="text-pretty text-lg text-muted-foreground leading-relaxed text-center md:text-start">
              At HopeFoundation, we believe that every person deserves dignity,
              support, and a chance to thrive. Our mission is to transform
              communities by providing compassionate aid and sustainable
              solutions to those facing hardship.
            </p>
          </div>

          {/* Right: Image Placeholder */}
          <div className="w-full h-96 bg-secondary rounded-3xl relative overflow-hidden shadow-md">
            <Image
              fill
              src={"/team.jpg"}
              className="object-cover"
              alt="image of the team"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
