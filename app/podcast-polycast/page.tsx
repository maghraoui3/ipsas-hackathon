import FadeIn from "@/components/FadeIn";

export default function PodcastPolycast() {
  const episodes = [
    {
      title: "Épisode 1 : L'innovation dans l'éducation",
      description: "Découvrez comment l'IPSAS intègre l'innovation dans ses programmes éducatifs.",
      link: "#",
    },
    {
      title: "Épisode 2 : Les défis de l'ingénierie moderne",
      description: "Discussion sur les défis actuels et futurs de l'ingénierie avec des experts de l'industrie.",
      link: "#",
    },
    {
      title: "Épisode 3 : Témoignages d'étudiants",
      description: "Écoutez les expériences des étudiants de l'IPSAS et leurs parcours académiques.",
      link: "#",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-8 text-[#0B2C67] dark:text-white">Podcast Polycast</h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          Découvrez notre podcast dédié à l'innovation, à l'éducation et aux défis de l'ingénierie moderne.
        </p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {episodes.map((episode, index) => (
          <FadeIn key={episode.title} delay={index * 0.2}>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold text-[#0B2C67] dark:text-white mb-4">{episode.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{episode.description}</p>
              <a
                href={episode.link}
                className="inline-block text-[#318CE7] dark:text-[#60A5FA] hover:underline"
              >
                Écouter →
              </a>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}