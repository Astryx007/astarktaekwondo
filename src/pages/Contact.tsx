import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-center text-muted-foreground mb-12">
              We'd love to hear from you. Get in touch with us today!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Location</h3>
                      <p className="text-muted-foreground">
                        900 N. Austin Avenue #307
                        <br />
                        Georgetown, Texas 78626
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 mb-6">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Phone</h3>
                      <a
                        href="tel:512.819.4000"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        512.819.4000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 mb-6">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Email</h3>
                      <a
                        href="mailto:info@gtstartaekwondo.com"
                        className="text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        info@gtstartaekwondo.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">Office Hours</h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Thursday: 3:30 PM - 8:30 PM</p>
                        <p>Friday: 4:00 PM - 7:00 PM</p>
                        <p>Saturday: 8:30 AM - 12:30 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="font-bold text-2xl mb-6">Send Us a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-muted/50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center mb-4">
                  Visit Our School
                </h3>
                <p className="text-center text-muted-foreground mb-6">
                  Stop by during our office hours for a tour of our facility and to meet our instructors. 
                  We're located in the heart of Georgetown and easy to find!
                </p>
                <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">
                    [Map placeholder - 900 N. Austin Avenue #307, Georgetown, TX 78626]
                  </p>
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

export default Contact;
