import { Container } from "@/components/container";

export function Header() {
  return (
    <section className="bg-background">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h1 className="text-balance text-5xl md:text-6xl font-bold tracking-tight text-primary">
              About Us
            </h1>
            <p className="text-pretty text-lg md:text-xl text-muted-foreground leading-relaxed">
              At HopeFoundation, we believe that every person deserves dignity, support, and a chance to thrive. Our mission is to transform communities by providing compassionate aid and sustainable solutions to those facing hardship.
            </p>
          </div>
          
          {/* Right: Image Placeholder */}
          <div className="w-full h-96 bg-secondary rounded-lg"></div>
        </div>
      </Container>
    </section>
  );
}
