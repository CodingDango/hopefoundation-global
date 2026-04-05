import { Container } from "@/components/container";

export function WhyAndWho() {
  return (
    <section className="bg-secondary">
      <Container>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Who We Serve */}
          <div className="space-y-6">
            <div className="w-full h-80 bg-secondary rounded-lg mb-6"></div>
            <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground">
              Who We Serve
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-primary font-bold text-lg shrink-0">•</span>
                <span className="text-secondary-foreground">Families struggling with food insecurity and basic needs</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-lg shrink-0">•</span>
                <span className="text-secondary-foreground">Individuals facing homelessness and lack of shelter</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-lg shrink-0">•</span>
                <span className="text-secondary-foreground">Children and youth in underfunded communities</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-lg shrink-0">•</span>
                <span className="text-secondary-foreground">Elderly and vulnerable populations without adequate support</span>
              </li>
              <li className="flex gap-4">
                <span className="text-primary font-bold text-lg shrink-0">•</span>
                <span className="text-secondary-foreground">Communities affected by natural disasters and crises</span>
              </li>
            </ul>
          </div>

          {/* Why We Do It */}
          <div className="space-y-6">
            <div className="w-full h-80 bg-secondary rounded-lg mb-6"></div>
            <h2 className="text-3xl font-bold tracking-tight text-secondary-foreground">
              Why We Do It
            </h2>
            <p className="text-base text-secondary-foreground leading-relaxed">
              We believe that hope is contagious and compassion is transformative.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-primary font-bold text-lg shrink-0">✓</span>
                <span className="text-secondary-foreground"><strong>Restore Dignity</strong> - Every person deserves to be treated with respect and worth</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold text-lg shrink-0">✓</span>
                <span className="text-secondary-foreground"><strong>Build Community</strong> - Real change happens when we stand together</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold text-lg shrink-0">✓</span>
                <span className="text-secondary-foreground"><strong>Create Lasting Change</strong> - Sustainable solutions that transform lives long-term</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
