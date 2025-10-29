import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2 } from "lucide-react";

const FreeTrial = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your interest! We'll contact you soon to schedule your trial.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Start Your <span className="text-primary">Free Trial</span>
            </h1>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Experience Star Taekwondo with our special 2-week trial program
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-primary">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-primary text-primary-foreground rounded-full px-6 py-2 text-lg font-bold mb-4">
                      Special Offer: $19.99
                    </div>
                    <h2 className="text-2xl font-bold mb-2">2-Week Trial Program</h2>
                    <p className="text-muted-foreground">
                      Perfect for beginners - no experience necessary!
                    </p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">1 Private Lesson</h4>
                        <p className="text-sm text-muted-foreground">
                          One-on-one instruction tailored to your needs
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">3 Group Classes</h4>
                        <p className="text-sm text-muted-foreground">
                          Experience our community and learn with others
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">No Long-Term Commitment</h4>
                        <p className="text-sm text-muted-foreground">
                          Try us out with no obligation to continue
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-semibold">All Ages Welcome</h4>
                        <p className="text-sm text-muted-foreground">
                          Programs available for children, teens, and adults
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted rounded-lg p-4 text-sm text-center">
                    <p className="font-semibold mb-1">Questions?</p>
                    <p className="text-muted-foreground">
                      Call us at{" "}
                      <a href="tel:512.819.4000" className="text-primary hover:underline">
                        512.819.4000
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Sign Up Today</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="age">Age *</Label>
                        <Input
                          id="age"
                          name="age"
                          type="number"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="grade">Grade (if applicable)</Label>
                        <Input
                          id="grade"
                          name="grade"
                          className="mt-1"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="experience">Previous Martial Arts Experience</Label>
                      <select
                        id="experience"
                        name="experience"
                        className="w-full mt-1 px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="none">No experience</option>
                        <option value="beginner">Beginner (less than 1 year)</option>
                        <option value="intermediate">Intermediate (1-3 years)</option>
                        <option value="advanced">Advanced (3+ years)</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="comments">Questions or Comments</Label>
                      <textarea
                        id="comments"
                        name="comments"
                        rows={4}
                        className="w-full mt-1 px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      ></textarea>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Submit Registration
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      * Indicates required field. By submitting this form, you agree to be 
                      contacted by Star Taekwondo regarding your trial registration.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-muted/50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">What Happens Next?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div>
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold mb-3 mx-auto md:mx-0">
                      1
                    </div>
                    <h4 className="font-semibold mb-2">We'll Contact You</h4>
                    <p className="text-sm text-muted-foreground">
                      A member of our team will reach out within 24 hours to schedule your first lesson.
                    </p>
                  </div>
                  <div>
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold mb-3 mx-auto md:mx-0">
                      2
                    </div>
                    <h4 className="font-semibold mb-2">Start Your Journey</h4>
                    <p className="text-sm text-muted-foreground">
                      Come to your first class ready to learn and have fun. We'll provide everything you need.
                    </p>
                  </div>
                  <div>
                    <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold mb-3 mx-auto md:mx-0">
                      3
                    </div>
                    <h4 className="font-semibold mb-2">Decide to Continue</h4>
                    <p className="text-sm text-muted-foreground">
                      After your trial, choose the membership option that works best for you and your family.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreeTrial;
