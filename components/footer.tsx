import Link from "next/link";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0B2C67] dark:bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">
              Route Menzel Chaker KM 0.5<br />
              Sfax, Tunisia<br />
              Tel: (+216) 74 862 800<br />
              Email: contact@ipsas.tn
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/programs">Programs</Link></li>
              <li><Link href="/admissions">Admissions</Link></li>
              <li><Link href="/student-life">Student Life</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Use</Link></li>
              <li><Link href="/legal">Legal Mentions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-[#318CE7] dark:hover:text-[#60A5FA]">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://twitter.com" className="hover:text-[#318CE7] dark:hover:text-[#60A5FA]">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com" className="hover:text-[#318CE7] dark:hover:text-[#60A5FA]">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://youtube.com" className="hover:text-[#318CE7] dark:hover:text-[#60A5FA]">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} IPSAS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}