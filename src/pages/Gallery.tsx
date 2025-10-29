import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Photo <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-center text-muted-foreground mb-12">
              See our students in action at classes, events, and competitions
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground">Class Photos</span>
                  </div>
                  <h3 className="font-bold text-lg">Regular Classes</h3>
                  <p className="text-sm text-muted-foreground">
                    View our students training and learning
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground">Event Photos</span>
                  </div>
                  <h3 className="font-bold text-lg">Special Events</h3>
                  <p className="text-sm text-muted-foreground">
                    Demonstrations, parties, and celebrations
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground">Belt Test Photos</span>
                  </div>
                  <h3 className="font-bold text-lg">Belt Testing</h3>
                  <p className="text-sm text-muted-foreground">
                    Students advancing to their next rank
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground">Board Breaking Photos</span>
                  </div>
                  <h3 className="font-bold text-lg">Board Breaking Day</h3>
                  <p className="text-sm text-muted-foreground">
                    Students breaking boards and building confidence
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground">Tournament Photos</span>
                  </div>
                  <h3 className="font-bold text-lg">Tournaments</h3>
                  <p className="text-sm text-muted-foreground">
                    Competition team members in action
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground">Buddy Day Photos</span>
                  </div>
                  <h3 className="font-bold text-lg">Buddy Day</h3>
                  <p className="text-sm text-muted-foreground">
                    Students bringing friends to try taekwondo
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary text-primary-foreground text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Want to Be Part of Our Gallery?</h3>
                <p className="text-lg mb-6">
                  Join Star Taekwondo and create your own success story!
                </p>
                <a
                  href="/free-trial"
                  className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-semibold hover:bg-secondary/90 transition-colors"
                >
                  Start Your Free Trial
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
