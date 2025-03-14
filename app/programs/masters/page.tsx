import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function Masters() {
  const programs = [
    {
      title: "Master en Génie de l’Environnement",
      description: "Formation en partenariat avec l’École supérieure des mines de Saint-Étienne (EMSE).",
      image: "https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Master en Sécurité et Qualité",
      description: "Formation en gestion de la sécurité et de la qualité dans les industries.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-8 text-[#0B2C67] dark:text-white">Master&apos;s Programs</h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          L’IPSAS propose des formations de master en partenariat avec des institutions internationales.
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program, index) => (
          <FadeIn key={program.title} delay={index * 0.2}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-4">
                  {program.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {program.description}
                </p>
                <a
                  href="#"
                  className="inline-block mt-6 text-[#318CE7] dark:text-[#60A5FA] hover:underline"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}