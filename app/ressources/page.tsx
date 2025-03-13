import FadeIn from "@/components/FadeIn";

export default function Resources() {
  const resources = [
    {
      title: "Academic Calendar 2024",
      description: "Download the academic calendar for the 2024-2025 academic year.",
      link: "#",
    },
    {
      title: "Research Publications",
      description: "Explore our latest research publications in engineering and technology.",
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-8 text-[#0B2C67] dark:text-white">Resources</h1>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resources.map((resource, index) => (
          <FadeIn key={resource.title} delay={index * 0.2}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-4">{resource.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{resource.description}</p>
              <a
                href={resource.link}
                className="inline-block text-[#318CE7] dark:text-[#60A5FA] hover:underline"
              >
                Download →
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}