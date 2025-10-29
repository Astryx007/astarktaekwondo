import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Schedule = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Class <span className="text-primary">Schedule</span>
            </h1>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Find the perfect class time for your schedule
            </p>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Clock className="mr-3 h-6 w-6 text-primary" />
                  Weekly Class Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold text-lg mb-2">Monday & Wednesday</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>4:00 PM - 4:45 PM: Little Tigers (Ages 4-6)</li>
                      <li>5:00 PM - 5:45 PM: Kids (Ages 7-12)</li>
                      <li>6:00 PM - 6:45 PM: Teens (Ages 13-17)</li>
                      <li>7:00 PM - 8:00 PM: Adult Class</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold text-lg mb-2">Tuesday & Thursday</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>4:00 PM - 4:45 PM: Little Tigers (Ages 4-6)</li>
                      <li>5:00 PM - 5:45 PM: Kids (Ages 7-12)</li>
                      <li>6:00 PM - 6:45 PM: Teens (Ages 13-17)</li>
                      <li>7:00 PM - 8:00 PM: Adult Class</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold text-lg mb-2">Friday</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>4:30 PM - 5:15 PM: All Ages Family Class</li>
                      <li>5:30 PM - 6:30 PM: Competition Team Training</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-bold text-lg mb-2">Saturday</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>9:00 AM - 9:45 AM: Little Tigers (Ages 4-6)</li>
                      <li>10:00 AM - 10:45 AM: Kids (Ages 7-12)</li>
                      <li>11:00 AM - 12:00 PM: Open Mat / Make-up Classes</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-lg p-6 mt-6">
                  <h4 className="font-semibold mb-3">Important Notes:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Students can attend any class in their age group throughout the week</li>
                    <li>• Private lessons available by appointment</li>
                    <li>• Family classes welcome students of all ages training together</li>
                    <li>• Make-up classes available on Saturdays for missed sessions</li>
                    <li>• Special events and belt testing schedules announced separately</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground text-center">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-lg mb-6">
                  Sign up for our 2-week trial program and experience our classes firsthand!
                </p>
                <Button asChild size="lg" variant="secondary">
                  <Link to="/free-trial">Start Your Trial</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Schedule;
