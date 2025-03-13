import FadeIn from "@/components/FadeIn";
import Image from "next/image";
import React from "react";

function TeamPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Team Section */}
      <FadeIn delay={0.8}>
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-[#0B2C67] dark:text-white mb-8 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[
              {
                name: "Najib Kammoun",
                role: "Président Directeur Général",
                image: "/public/equipe/président directeur général.jpg",
              },
              {
                name: "Mohamed Achref Kammoun",
                role: "Directeur",
                image: "/public/equipe/directeur.jpg",
              },
              {
                name: "Mohamed Zghal",
                role: "Secrétaire Général",
                image: "https://via.placeholder.com/150",
              },
              {
                name: "Chedli Bradai",
                role: "Directeur des Etudes",
                image: "https://via.placeholder.com/150",
              },
              {
                name: "Oussema Kamoun",
                role: "Directeur des Stages et de l'Ouverture sur l'Environnement",
                image: "https://via.placeholder.com/150",
              },
              {
                name: "Salma Ksibi",
                role: "Directrice de Centre de Carrière",
                image: "https://via.placeholder.com/150",
              },
              {
                name: "Emna Ben Ayed",
                role: "Directrice de Département Génie Informatique",
                image: "https://via.placeholder.com/150",
              },
              {
                name: "Ines Zarrad",
                role: "Directrice Département Génie Electromécanique",
                image: "https://via.placeholder.com/150",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Member Image */}
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Member Details */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-[#0B2C67] dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#318CE7] dark:text-[#60A5FA] font-medium">
                    {member.role}
                  </p>
                </div>

                {/* Social Links (Optional) */}
                <div className="flex justify-center space-x-4 pb-6">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-[#0B2C67] dark:hover:text-[#60A5FA] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.56v14.91c0 .97-.79 1.76-1.76 1.76H1.76C.79 21.23 0 20.44 0 19.47V4.56C0 3.59.79 2.8 1.76 2.8h20.48c.97 0 1.76.79 1.76 1.76zM9.6 18.4v-7.2H7.2v7.2h2.4zm-1.2-8.4c.8 0 1.44-.64 1.44-1.44 0-.8-.64-1.44-1.44-1.44-.8 0-1.44.64-1.44 1.44 0 .8.64 1.44 1.44 1.44zm10.8 8.4v-4.08c0-2.16-1.2-3.12-2.8-3.12-1.28 0-1.88.72-2.2 1.2v-1.04H12v7.2h2.4v-3.6c0-.96.16-1.92 1.36-1.92 1.2 0 1.2 1.12 1.2 2v3.52H19.2z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-[#0B2C67] dark:hover:text-[#60A5FA] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 3.56 8.1 8.1 8.1v-5.72H7.9v-2.38h2.24v-1.8c0-2.24 1.36-3.48 3.36-3.48.98 0 1.96.1 2.96.3v2.24h-1.68c-1.12 0-1.32.56-1.32 1.36v1.6h2.56l-.4 2.38h-2.16V22c4.4-.6 8.1-4.2 8.1-8.1 0-5.5-4.46-9.96-9.96-9.96z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-[#0B2C67] dark:hover:text-[#60A5FA] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.95 4.57c-.88.39-1.83.65-2.82.77 1.01-.61 1.79-1.57 2.16-2.72-.95.56-2 .97-3.12 1.19-.9-.96-2.18-1.56-3.6-1.56-2.72 0-4.92 2.2-4.92 4.92 0 .39.04.77.12 1.13-4.09-.2-7.72-2.16-10.15-5.14-.42.72-.66 1.56-.66 2.46 0 1.7.86 3.2 2.18 4.08-.8-.02-1.56-.24-2.22-.61v.06c0 2.38 1.7 4.37 3.95 4.82-.41.11-.85.17-1.3.17-.32 0-.63-.03-.94-.09.63 1.96 2.45 3.39 4.61 3.43-1.69 1.32-3.82 2.11-6.13 2.11-.4 0-.79-.02-1.18-.07 2.18 1.4 4.76 2.22 7.54 2.22 9.05 0 14-7.5 14-14 0-.21-.01-.42-.03-.63.96-.69 1.8-1.56 2.46-2.54z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </div>
  );
}

export default TeamPage;