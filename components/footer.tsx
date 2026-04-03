import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <span className="text-xl font-bold text-foreground">HopeFoundation</span>
            <p className="text-sm text-muted-foreground">
              Making a difference in communities worldwide through compassion and action.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                About Us
              </Link>
              <Link href="/programs" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Our Programs
              </Link>
              <Link href="/volunteer" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Volunteer
              </Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Get Involved</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/donate" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Donate
              </Link>
              <Link href="/fundraise" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Fundraise
              </Link>
              <Link href="/partner" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                Partner With Us
              </Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <p>123 Hope Street</p>
              <p>New York, NY 10001</p>
              <p>info@hopefoundation.org</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            2024 HopeFoundation. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
