import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen, Users, Globe } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  const testimonials = [
    {
      name: "Ahmed Ben Salah",
      role: "Computer Science Graduate",
      quote: "IPSAS provided me with the skills and knowledge to excel in the tech industry. The hands-on projects and supportive faculty made all the difference.",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    },
    {
      name: "Leila Trabelsi",
      role: "Petroleum Engineering Student",
      quote: "The resources and opportunities at IPSAS are unmatched. I’m proud to be part of such a dynamic and innovative community.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  const news = [
    {
      title: "New AI Research Lab Opens",
      date: "April 10, 2024",
      description: "IPSAS launches a state-of-the-art AI research lab to advance innovation in artificial intelligence.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Career Fair 2024",
      date: "April 20, 2024",
      description: "Join us for the annual career fair featuring top companies in engineering and technology.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-[#0B2C67] to-[#318CE7]">
        <div className="absolute inset-0">
          <Image
            src="/ipsas-foundation.jpg"
            alt="IPSAS Campus"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="relative container mx-auto h-full flex items-center">
          <FadeIn>
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-6">
                Shape Your Future at IPSAS
              </h1>
              <p className="text-xl mb-8">
                Join Tunisia&apos;s leading engineering school and unlock your potential
                with cutting-edge programs and world-class education.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-[#0B2C67] hover:bg-gray-200 ">
                  <Link href="/apply">Apply Now</Link>
                </Button>
                <Button size="lg" variant="outline" className=" dark:text-white bg-transparent border-white hover:bg-white/20 ">
                  <Link href="/programs">Explore Programs</Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-[#0B2C67] dark:text-white mb-12">
              Why Choose IPSAS?
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Expert Faculty",
                description: "Learn from industry experts and experienced professors.",
              },
              {
                icon: BookOpen,
                title: "Modern Curriculum",
                description: "Stay ahead with industry-aligned programs.",
              },
              {
                icon: Users,
                title: "Active Community",
                description: "Join a vibrant community of learners.",
              },
              {
                icon: Globe,
                title: "Global Network",
                description: "Connect with international partners.",
              },
            ].map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 0.2}>
                <Card className="dark:bg-gray-800 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <feature.icon className="h-5 w-5 text-[#0B2C67] dark:text-[#60A5FA]" />
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
      {/* <PuterChatComponent message="Tell me in detail what Rick and Morty is all about." /> */}
        <div className="container mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-[#0B2C67] dark:text-white mb-12">
              What Our Students Say
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={testimonial.name} delay={index * 0.2}>
                <Card className="dark:bg-gray-800 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-[#0B2C67] dark:text-white">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 italic">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-[#0B2C67] dark:text-white mb-12">
              Latest News
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {news.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.2}>
                <Card className="dark:bg-gray-800 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-[#0B2C67] dark:text-white">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {item.description}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {item.date}
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}