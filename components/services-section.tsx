import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">OUR SERVICES AT A GLANCE</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Empowering Your Digital Transformation with Pristine Systems and Solutions, Inc.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="h-48 relative overflow-hidden">
              <Image
                src="/implementation.jpg"
                alt="Implementation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-primary">Microsoft Dynamics ERP</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive enterprise resource planning solution to streamline your business processes.
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" size="sm">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="h-48 relative overflow-hidden">
              <Image
                src="/development.jpg"
                alt="Development"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-primary">Web Portals</h3>
              <p className="text-muted-foreground mb-4">
                Custom web portals for seamless interaction between your business and clients.
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" size="sm">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="h-48 relative overflow-hidden">
              <Image
                src="/project-m.jpg"
                alt="Project Management"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-primary">Dynamics Business Intelligence</h3>
              <p className="text-muted-foreground mb-4">
                Powerful analytics and reporting tools to drive data-driven decisions.
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" size="sm">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="h-48 relative overflow-hidden">
              <Image
                src="/training.jpg"
                alt="Training"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-primary">Help-Desk System</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive ticket management system for efficient issue resolution.
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" size="sm">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="h-48 relative overflow-hidden">
              <Image
                src="/service.jpg"
                alt="Service Review"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-primary">Mobile Applications</h3>
              <p className="text-muted-foreground mb-4">
                Custom mobile apps to keep your business connected on the go.
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" size="sm">
                Learn More
              </Button>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="h-48 relative overflow-hidden">
              <Image
                src="/support.jpg"
                alt="Managed Support"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-primary">Managed Support</h3>
              <p className="text-muted-foreground mb-4">
                24/7 managed support services to keep your systems running smoothly.
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground" size="sm">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
