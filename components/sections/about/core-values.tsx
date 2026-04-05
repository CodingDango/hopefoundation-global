import { Container } from "@/components/container";
import { Heart, Shield, Lightbulb, Users } from "lucide-react";

const values = [
  {
    title: "Compassion",
    icon: Heart,
  },
  {
    title: "Integrity",
    icon: Shield,
  },
  {
    title: "Innovation",
    icon: Lightbulb,
  },
  {
    title: "Community",
    icon: Users,
  },
];

export function CoreValues() {
  return (
    <section className="bg-background">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-primary md:text-5xl">
            Our Core Values
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="flex items-center gap-6">
                <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                  <Icon className="size-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {value.title}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
