import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import regularClass from "@/assets/regular-class.jpg";
import regularClass2 from "@/assets/regular-class-2.jpg";
import specialEvents from "@/assets/special-events.jpg";
import beltTesting from "@/assets/belt-testing.jpg";
import boardBreaking from "@/assets/board-breaking.jpg";
import compResults from "@/assets/compresults.png";
import buddyDay from "@/assets/buddy-day.jpg";
import competitionWinners from "@/assets/competition-winners.jpg";

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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={regularClass} alt="Regular Taekwondo class in session at Star Taekwondo" className="w-full h-64 object-cover" />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-center">Regular Classes</h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={regularClass2} alt="Students practicing Taekwondo forms" className="w-full h-64 object-cover" />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-center">Training Sessions</h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={specialEvents} alt="Special event demonstration with instructors" className="w-full h-64 object-cover" />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-center">Special Events</h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={beltTesting} alt="Belt testing ceremony at Star Taekwondo" className="w-full h-64 object-cover" />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-center">Belt Testing</h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={boardBreaking} alt="Student practicing board breaking technique" className="w-full h-64 object-cover" />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-center">Board Breaking</h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={competitionWinners} alt="Team USA medal winners at World Poomsae Championships" className="w-full h-64 object-cover" />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-center">Competition Results</h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={compResults} alt="Star Taekwondo competition achievements" className="w-full h-64 object-cover" />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-center">Competition Team</h3>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img src={buddyDay} alt="Buddy Day group photo with all students" className="w-full h-64 object-cover" />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-center">Buddy Day</h3>
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
