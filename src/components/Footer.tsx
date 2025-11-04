import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import rev from "@/assets/rev.png"; // ✅ keep it in src/assets

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Section */}
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
                <a
                  href="tel:+15128194000"
                  className="text-sm hover:text-primary transition-colors"
                >
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

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/program" className="hover:text-primary transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/schedule" className="hover:text-primary transition-colors">
                  Schedule
                </Link>
              </li>
              <li>
                <Link href="/free-trial" className="hover:text-primary transition-colors">
                  Free Trial
                </Link>
              </li>
            </ul>
          </div>

          {/* About + Google Reviews */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Star Taekwondo</h3>
            <p className="text-sm text-muted-foreground">
              Providing quality martial arts education for the entire family in Georgetown, Texas.
              Building character, confidence, and discipline one student at a time.
            </p>

            {/* Google Reviews Badge */}
            <a
              href="https://maps.app.goo.gl/XxBZbqUjTjCn6oRM6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="See our Google reviews"
              className="inline-block mt-4"
            >
              <Image
                src={rev}
                alt="Google Reviews — click to read and leave a review"
                width={180}
                height={60}
                className="hover:opacity-90 transition"
              />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Star Taekwondo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

