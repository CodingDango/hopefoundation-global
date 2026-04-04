import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    quote: "When I lost my job, I didn't know how I would feed my children. HopeFoundation provided not just meals, but hope. They helped me get back on my feet.",
    name: "Maria Santos",
    role: "Program Beneficiary",
    location: "New York"
  },
  {
    quote: "The scholarship program changed my life. I was able to finish my degree and now I'm giving back to my community. Forever grateful for this opportunity.",
    name: "James Wilson",
    role: "Scholarship Recipient",
    location: "Chicago"
  },
  {
    quote: "After the flood destroyed our home, HopeFoundation was there within hours. Their emergency response team helped us rebuild not just our house, but our lives.",
    name: "Linda Chen",
    role: "Disaster Relief Recipient",
    location: "Houston"
  }
]

export function TestimonialSection() {
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Stories of Impact
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Real stories from real people whose lives have been transformed through your generosity.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none bg-background shadow-sm">
              <CardContent className="p-6">
                <span className="mb-4 block text-4xl leading-none text-primary">&quot;</span>
                <blockquote className="mb-6">
                  <p className="text-pretty leading-relaxed text-foreground">
                    {testimonial.quote}
                  </p>
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="size-10 shrink-0 rounded-full bg-muted" aria-label={`Photo of ${testimonial.name}`} />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
