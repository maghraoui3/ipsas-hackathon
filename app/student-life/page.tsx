import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function StudentLife() {
  const activities = [
    {
      title: "Hackathon",
      description: "Join our annual hackathon to showcase your skills and collaborate with peers.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Career Fair",
      description: "Meet top companies and explore internship and job opportunities.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
  ];

  const clubs = [
    {
      name: "Tunivisions",
      description: "A student club focused on entrepreneurship and innovation.",
    },
    {
      name: "IEEE Student Branch",
      description: "A club for students interested in technology and engineering.",
    },
  ];

  const testimonials = [
    {
      name: "Ntama Amba Ssa Dominique Serge",
      role: "Cameroun",
      quote: "Le but de l'enseignement dans cette discipline est de prodiguer des connaissances théoriques et pratiques de haut niveau.",
    },
    {
      name: "Rahma Belal et Samira Ghribi",
      role: "Tunisie",
      quote: "La région de Sfax est connue par ses activités pétrolières, notamment par la présence de nombreuses sociétés multinationales.",
    },
  ];

  const internationalPlacements = [
    {
      company: "Total Energies",
      location: "France",
      description: "Opportunités de stages dans le domaine de l'énergie et du pétrole.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      company: "Schlumberger",
      location: "USA",
      description: "Stages en ingénierie pétrolière et technologies de forage.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      company: "Siemens",
      location: "Allemagne",
      description: "Stages en génie électrique et automatisation industrielle.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      {/* Activities Section */}
      <FadeIn>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-6">Activities & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity) => (
              <div key={activity.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0B2C67] dark:text-white mb-2">{activity.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Clubs Section */}
      <FadeIn delay={0.2}>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-6">Student Clubs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clubs.map((club) => (
              <div key={club.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-[#0B2C67] dark:text-white mb-2">{club.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{club.description}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* International Placements & Internships Section */}
      <FadeIn delay={0.4}>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-6">International Placements & Internships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internationalPlacements.map((placement) => (
              <div key={placement.company} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={placement.image}
                    alt={placement.company}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0B2C67] dark:text-white mb-2">{placement.company}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{placement.location}</p>
                  <p className="text-gray-600 dark:text-gray-300">{placement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Testimonials Section */}
      <FadeIn delay={0.6}>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-6">Student Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <p className="text-gray-600 dark:text-gray-300 italic mb-4">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="font-semibold text-[#0B2C67] dark:text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </div>
  );
}