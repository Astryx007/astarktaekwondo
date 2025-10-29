import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import grandmasterKim from "@/assets/grandmaster-kim.png";
import brochureFront from "@/assets/brochure-front.png";
import brochureBack from "@/assets/brochure-back.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
              About <span className="text-primary">Star Taekwondo</span>
            </h1>
            
            <Card className="mb-8">
              <CardContent className="p-8">
                <p className="text-lg mb-6">
                  Star Taekwondo is Georgetown, Texas's premier martial arts school, dedicated to providing 
                  quality Taekwondo instruction for students of all ages and skill levels. Our experienced 
                  instructors are committed to helping each student achieve their personal best, both on and 
                  off the mat.
                </p>
                <p className="text-lg mb-6">
                  We believe in the transformative power of martial arts to build character, discipline, and 
                  confidence. Our programs are designed to meet the unique needs of each student, from young 
                  children just starting their martial arts journey to adults looking to improve their fitness 
                  and self-defense skills.
                </p>
              </CardContent>
            </Card>

            {/* Grand Master Kim Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-8">Meet Grand Master Kim</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                <div className="order-2 md:order-1">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-2xl mb-4 text-primary">Accreditation & Achievements</h3>
                      <p className="mb-4 text-muted-foreground">
                        Grand Master Kim graduated from Yong-In University, with a major in Taekwondo.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Bachelor's Degree in Physical Education/Taekwondo at Yong-In University</li>
                        <li>• Founder of Yong-In Martial Arts</li>
                        <li>• Korean Tigers Team Demonstration Leader/Trainer (91 ~ 93)</li>
                        <li>• Korean Special Military Instructor (88 ~ 90)</li>
                        <li>• 20 years of teaching experience</li>
                        <li>• 7th Degree Black belt Taekwondo</li>
                        <li>• 4th Degree Black belt Hapkido</li>
                        <li>• 4th Degree Black belt Kickboxing</li>
                        <li>• 4th Degree Black belt Yongmoodo</li>
                        <li>• 2014 Coach of 9 National USA Poomsae Team Members</li>
                        <li>• 2014 Coach of 3 National Collegiate Team Members</li>
                        <li>• 2013 Coach of 11 National USA Poomsae Team Members</li>
                        <li>• 2012 Coach of 5 National USA Poomsae Team Members</li>
                        <li>• 2011 Coach of 1 National USA Poomsae Team Members</li>
                        <li>• 2014 Coach of 3 World Poomsae Taekwondo Championships Bronze Medalists</li>
                        <li>• 2013 Coach of 3 World Poomsae Taekwondo Championships Bronze Medalists</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="order-1 md:order-2">
                  <img 
                    src={grandmasterKim} 
                    alt="Grand Master Kim" 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Brochure Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <img 
                src={brochureFront} 
                alt="Star Taekwondo Brochure Front" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <img 
                src={brochureBack} 
                alt="Star Taekwondo Brochure Back" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">Respect</h3>
                  <p className="text-muted-foreground">
                    We teach students to respect themselves, their instructors, and their fellow students, 
                    creating a positive learning environment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">Discipline</h3>
                  <p className="text-muted-foreground">
                    Through consistent practice and dedication, students develop self-discipline that 
                    extends beyond the dojang into all areas of life.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">Perseverance</h3>
                  <p className="text-muted-foreground">
                    We encourage students to push through challenges and never give up, building mental 
                    toughness and resilience.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 text-primary">Integrity</h3>
                  <p className="text-muted-foreground">
                    We instill the importance of honesty, ethical behavior, and doing the right thing even 
                    when no one is watching.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-muted/50">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
                <p className="text-lg text-muted-foreground">
                  Whether you're looking to get fit, learn self-defense, or become part of a supportive 
                  community, Star Taekwondo welcomes you. Come experience the difference that quality 
                  martial arts instruction can make in your life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
