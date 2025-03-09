import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function About() {
  return (
    <div className="container mx-auto py-12">
      {/* Mission Section */}
      <FadeIn>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-6">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            La mission de l’IPSAS est d&apos;offrir à ses membres (étudiants, staff académique, staff administratif et technique) ainsi qu&apos;à ses partenaires un environnement prospère favorisant l’excellence et l’innovation pédagogique et technologique dans le but d’augmenter continuellement le nombre de compétences internationalement reconnues des diplômés de l’IPSAS.
          </p>
        </section>
      </FadeIn>

      {/* Vision Section */}
      <FadeIn delay={0.2}>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-6">Our Vision</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            L&apos;IPSAS a défini plusieurs engagements orientés projet afin de concrétiser sa vision consistant à faire de l’IPSAS la 1ère référence en Afrique dans la formation universitaire privée d’ingénieurs en termes d’innovation technologique.
          </p>
        </section>
      </FadeIn>

      {/* Values Section */}
      <FadeIn delay={0.4}>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Excellence",
                description: "Poursuivre constamment l'amélioration de la qualité de l'enseignement, de la recherche et des services offerts.",
              },
              {
                title: "Innovation",
                description: "Encourager la créativité et l'adoption de nouvelles approches pédagogiques et technologiques.",
              },
              {
                title: "Intégrité",
                description: "Maintenir des normes éthiques élevées dans toutes les activités et interactions.",
              },
              {
                title: "Collaboration",
                description: "Favoriser le travail en équipe et les partenariats avec les acteurs académiques, industriels et communautaires.",
              },
            ].map((value) => (
              <div key={value.title} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-[#0B2C67] dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* History Section */}
      <FadeIn delay={0.6}>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-6">Our History</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            L’IPSAS pionnier de l’enseignement supérieur privé en Tunisie dispense principalement des formations d’ingénieurs depuis 2001.
          </p>
        </section>
      </FadeIn>

      {/* Team Section */}
      <FadeIn delay={0.8}>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                "name": "Najib Kammoun",
                "role": "Président Directeur Général",
                "image": "https://via.placeholder.com/150"
              },
              {
                "name": "Mohamed Achref Kammoun",
                "role": "Directeur",
                "image": "https://via.placeholder.com/150"
              },
              {
                "name": "Mohamed Zghal",
                "role": "Secrétaire Général",
                "image": "https://via.placeholder.com/150"
              },
              {
                "name": "Chedli Bradai",
                "role": "Directeur des Etudes",
                "image": "https://via.placeholder.com/150"
              },
              {
                "name": "Oussema Kamoun",
                "role": "Directeur des Stages et de l'Ouverture sur l'Environnement",
                "image": "https://via.placeholder.com/150"
              },
              {
                "name": "Salma Ksibi",
                "role": "Directrice de Centre de Carrière",
                "image": "https://via.placeholder.com/150"
              },
              {
                "name": "Emna Ben Ayed",
                "role": "Directrice de Département Génie Informatique",
                "image": "https://via.placeholder.com/150"
              },
              {
                "name": "Ines Zarrad",
                "role": "Directrice Département Génie Electromécanique",
                "image": "https://via.placeholder.com/150"
              }
            ].map((member) => (
              <div key={member.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#0B2C67] dark:text-white mb-2">{member.name}</h3>
                  <p className="text-[#318CE7] dark:text-[#60A5FA] font-medium mb-3">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </div>
  );
}