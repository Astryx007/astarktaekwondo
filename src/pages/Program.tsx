import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Baby, Dumbbell, Trophy } from "lucide-react";

const Program = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Our <span className="text-primary">Programs</span>
            </h1>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Star Taekwondo offers programs for all ages and skill levels
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Baby className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">Little Tigers (Ages 4-6)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our Little Tigers program introduces young children to martial arts through fun, 
                    engaging activities that develop basic motor skills, coordination, and discipline.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Age-appropriate instruction</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Focus on fun and confidence building</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Basic martial arts fundamentals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Social skills development</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Users className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">Kids & Teens (Ages 7-17)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our youth program builds on fundamental skills while emphasizing character development, 
                    self-defense, and physical fitness in a structured environment.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Traditional Taekwondo training</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Character development focus</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Self-defense skills</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Competition opportunities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Dumbbell className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">Adult Program (18+)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our adult program provides a comprehensive martial arts experience that improves fitness, 
                    teaches practical self-defense, and offers stress relief in a supportive environment.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Full-body workout</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Practical self-defense techniques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Stress relief and mental focus</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Flexible class schedules</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Trophy className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">Competition Team</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    For students interested in taking their skills to the next level, our competition team 
                    provides advanced training and opportunities to compete in local and regional tournaments.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Advanced technique training</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Tournament preparation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Sparring and forms competition</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>Team camaraderie</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Not Sure Which Program is Right for You?</h3>
                <p className="text-lg mb-6">
                  Try our 2-week trial program for only $19.99 and discover which program best fits your 
                  goals and schedule!
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

export default Program;
