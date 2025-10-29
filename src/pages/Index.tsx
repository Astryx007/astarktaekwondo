import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Award, Users, Target, Heart } from "lucide-react";
import giftCertificate from "@/assets/gift-certificate.png";
import newspaperFeature from "@/assets/newspaper-feature.jpg";
import cherryFestival from "@/assets/cherry-festival.jpg";
import mothersDay from "@/assets/mothers-day.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Welcome To <span className="text-primary">Star TaeKwonDo</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              The best martial arts program for the entire family
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg">
                <Link to="/free-trial">Start Free Trial</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
              <div className="order-2 lg:order-1">
                <Card className="border-2 border-primary">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <h2 className="text-3xl font-bold mb-4">Special Trial Offer!</h2>
                      <p className="text-xl mb-6">
                        Only <span className="text-primary font-bold text-3xl">$19.99</span> for 2 Weeks Trial Program
                      </p>
                      <div className="bg-background rounded-lg p-6 mb-6">
                        <h3 className="font-semibold text-lg mb-4">Trial Program Includes:</h3>
                        <ul className="text-left space-y-2">
                          <li className="flex items-start">
                            <span className="text-primary mr-2">✓</span>
                            <span>1 Private Lesson</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">✓</span>
                            <span>3 Group Classes</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-primary mr-2">✓</span>
                            <span>No experience necessary - perfect for beginners!</span>
                          </li>
                        </ul>
                      </div>
                      <Button asChild size="lg">
                        <Link to="/free-trial">Sign Up Now</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src={giftCertificate} 
                  alt="Gift Certificate - Give the best gift" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Star Taekwondo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Expert Instruction</h3>
                <p className="text-sm text-muted-foreground">
                  Learn from experienced and certified instructors
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Family Friendly</h3>
                <p className="text-sm text-muted-foreground">
                  Programs for all ages and skill levels
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Character Building</h3>
                <p className="text-sm text-muted-foreground">
                  Develop discipline, respect, and confidence
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Supportive Environment</h3>
                <p className="text-sm text-muted-foreground">
                  Encouraging community that helps you succeed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Highlights Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Community & Achievements</h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              See what makes Star Taekwondo special
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={cherryFestival} 
                  alt="1st Place at 2018 Red Poppy Festival" 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <p className="text-sm font-semibold text-center">
                    1st Place at 2018 Red Poppy Festival in Georgetown, Texas
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={mothersDay} 
                  alt="2018 Mothers Day celebration" 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <p className="text-sm font-semibold text-center">
                    2018 Mother's Day Celebration
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <img 
                  src={newspaperFeature} 
                  alt="Featured in The Sun Newspaper" 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <p className="text-sm font-semibold text-center">
                    Featured in The Sun Newspaper
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Our Mission</h2>
            <p className="text-lg text-center mb-8 text-muted-foreground">
              Our mission is to strive for the holistic development of an individual. Our commitment is to provide 
              a challenging environment which allows the development of the physical, mental and emotional self.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">Listen & Understand</h3>
                  <p className="text-sm text-muted-foreground">
                    We listen to the wants and needs of our students and families and address them specifically.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">Continually Educate</h3>
                  <p className="text-sm text-muted-foreground">
                    We update our skills in communication and instruction to maintain our commitment to excellence.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">Empower Students</h3>
                  <p className="text-sm text-muted-foreground">
                    We educate and train our students so they are empowered to protect themselves and maintain optimal health.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-3">Supportive Environment</h3>
                  <p className="text-sm text-muted-foreground">
                    We maintain an environment that gives each individual the opportunity to pursue personal success and freedom.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
