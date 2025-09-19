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
              <h3 className="text-xl font-bold mb-3 text-primary">Implementation</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive system implementation services tailored to your business needs.
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
              <h3 className="text-xl font-bold mb-3 text-primary">Development</h3>
              <p className="text-muted-foreground mb-4">
                Custom software development solutions to drive your digital transformation.
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
              <h3 className="text-xl font-bold mb-3 text-primary">Project Management</h3>
              <p className="text-muted-foreground mb-4">
                Expert project management to ensure successful delivery of your initiatives.
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
              <h3 className="text-xl font-bold mb-3 text-primary">Training</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive training programs to maximize your team's potential.
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
              <h3 className="text-xl font-bold mb-3 text-primary">Service Review</h3>
              <p className="text-muted-foreground mb-4">
                Regular service reviews to ensure optimal performance and continuous improvement.
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
