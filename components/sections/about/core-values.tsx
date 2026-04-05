import { Container } from "@/components/container";
import { Shield, Heart, Lightbulb, Users } from "lucide-react";

const values = [
  {
    title: "Compassion",
    description: "We lead with empathy in every action we take",
    icon: Heart,
  },
  {
    title: "Integrity",
    description: "We operate with transparency and honesty",
    icon: Shield,
  },
  {
    title: "Innovation",
    description: "We continuously improve our solutions",
    icon: Lightbulb,
  },
  {
    title: "Community",
    description: "We believe in the power of togetherness",
    icon: Users,
  },
];

export default function CoreValues() {
  return (
    <section className="bg-background">
      <Container>
        <div className="mb-12 text-center md:text-start">
          <h2 className="text-balance text-4xl font-bold tracking-tight  md:text-5xl">
            Core Values
          </h2>
          <p className="mx-auto md:mx-0 mt-4 max-w-2xl text-pretty text-lg text-muted-foreground">
            These core values guide every decision we make and shape how we serve our community. 
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="flex items-start gap-4">
                <div className="p-4 bg-primary/10 rounded-lg shrink-0">
                  <Icon className="size-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
