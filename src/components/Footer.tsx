import { Mail, MapPin, Phone } from "lucide-react";
import reviewImage from "@/assets/rev.png";
import FbIcon from "@/assets/facebook28px.svg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="text-sm">
                  900 N. Austin Avenue #307
                  <br />
                  Georgetown, Texas 78626
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:512.819.4000" className="text-sm hover:text-primary transition-colors">
                  512.819.4000
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:info@gtstartaekwondo.com"
                  className="text-sm hover:text-primary transition-colors"
                >
                  info@gtstartaekwondo.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/program" className="hover:text-primary transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="/schedule" className="hover:text-primary transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="/free-trial" className="hover:text-primary transition-colors">
                  Free Trial
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">About Star Taekwondo</h3>
            <p className="text-sm text-muted-foreground">
              Providing quality martial arts education for the entire family in Georgetown, Texas.
              Building character, confidence, and discipline one student at a time.
            </p>
            <a
              href="https://www.google.com/maps/place/Star+Taekwondo/@30.6807149,-97.7397593,13z/data=!4m12!1m2!2m1!1smartial+arts!3m8!1s0x8644d615f31eec77:0xb902159200a17cae!8m2!3d30.651447!4d-97.6764465!9m1!1b1!15sCgxtYXJ0aWFsIGFydHNaDiIMbWFydGlhbCBhcnRzkgETbWFydGlhbF9hcnRzX3NjaG9vbJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VScWJFdGxWR2xSUlJBQqoBRhABKhAiDG1hcnRpYWwgYXJ0cygAMh4QASIaS_N8jUBw-HA-a15TJ887v1aKPN8gbZo5AEYyEBACIgxtYXJ0aWFsIGFydHPgAQD6AQQIABBF!16s%2Fg%2F1260ynlg9?entry=ttu&g_ep=EgoyMDI1MTAxMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 hover:opacity-80 transition-opacity"
            >
              <img
                src={reviewImage}
                alt="Google Reviews for Star Taekwondo"
                className="h-12 w-auto"
              />
            </a>
             <a
              href="https://www.facebook.com/gtstartaekwondo/?fref=ts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 hover:opacity-80 transition-opacity"
            >
              <img
                src={FbIcon}
                alt="Facebook for Star Taekwondo"
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Star Taekwondo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer
