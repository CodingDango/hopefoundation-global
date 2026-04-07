import { Card } from "@/components/ui/card";
import { Mail, MapPin, MessageCircle, Share2, Briefcase } from "lucide-react";

export default function ContactInfo() {
  return (
     <div className="space-y-8">
            {/* Contact Info Card */}
            <Card className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Contact Info
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <Mail className="size-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a
                      href="mailto:hello@hopefoundation.org"
                      className="text-muted-foreground hover:text-primary"
                    >
                      hello@hopefoundation.org
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <MapPin className="size-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Address</p>
                    <p className="text-muted-foreground">
                      123 Hope Street
                      <br />
                      Compassion City, CC 12345
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                    <MessageCircle className="size-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Phone</p>
                    <a
                      href="tel:+1234567890"
                      className="text-muted-foreground hover:text-primary"
                    >
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Follow Us</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="Share on Twitter"
                  className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <Share2 className="size-5 text-primary" />
                </a>
                <a
                  href="#"
                  aria-label="Our Instagram"
                  className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <MessageCircle className="size-5 text-primary" />
                </a>
                <a
                  href="#"
                  aria-label="Our LinkedIn"
                  className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <Briefcase className="size-5 text-primary" />
                </a>
              </div>
            </div>
          </div>
  )
}
