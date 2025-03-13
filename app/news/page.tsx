import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function News() {
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
    <div className="container mx-auto py-12">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-8 text-[#0B2C67] dark:text-white">Latest News</h1>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {news.map((item, index) => (
          <FadeIn key={item.title} delay={index * 0.2}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-4">{item.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{item.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}