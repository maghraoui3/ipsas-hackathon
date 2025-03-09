import FadeIn from "@/components/FadeIn";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export default function Contact() {
  return (
    <div className="container mx-auto py-12">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-8 text-[#0B2C67] dark:text-white">Contact Us</h1>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <FadeIn delay={0.2}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Have questions or need assistance? Reach out to us using the information below or fill out the form.
            </p>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Address:</span> Avenue 5 aout Rue Said AbouBaker 3002, Sfax, Tunisia
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Phone:</span> (+216) 39 158 855 | (+216) 74 225 665
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-semibold">Email:</span> contact@ipsas-ens.net
              </p>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-[#0B2C67] dark:text-white mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  className="text-[#0B2C67] dark:text-[#60A5FA] hover:text-[#318CE7] dark:hover:text-[#318CE7] transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-[#0B2C67] dark:text-[#60A5FA] hover:text-[#318CE7] dark:hover:text-[#318CE7] transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-[#0B2C67] dark:text-[#60A5FA] hover:text-[#318CE7] dark:hover:text-[#318CE7] transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://youtube.com"
                  className="text-[#0B2C67] dark:text-[#60A5FA] hover:text-[#318CE7] dark:hover:text-[#318CE7] transition-colors"
                >
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Contact Form */}
        <FadeIn delay={0.4}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  className="w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="w-full"
                  rows={5}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#0B2C67] hover:bg-[#318CE7] dark:bg-white dark:text-[#0B2C67] dark:hover:bg-gray-200"
              >
                Send Message
              </Button>
            </form>
          </div>
        </FadeIn>
      </div>

      {/* Google Maps Integration */}
      <FadeIn delay={0.6}>
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3276.041635468683!2d10.760215315235936!3d34.81787878040729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1301d2b7a7a8b5b5%3A0x9f8b5b5b5b5b5b5b!2sInstitut%20Polytechnique%20des%20Sciences%20Avanc%C3%A9es%20de%20Sfax!5e0!3m2!1sen!2stn!4v1620000000000!5m2!1sen!2stn"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg"
          />
        </div>
      </FadeIn>
    </div>
  );
}