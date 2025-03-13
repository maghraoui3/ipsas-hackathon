import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function Partners() {
  const schools = [
    {
      name: "Université d’architecture de Sofia",
      logo: "/partners/ecole/p4.png",
    },
    {
      name: "Ecole Nationale des Mines d’Alès",
      logo: "/partners/ecole/p2.png",
    },
  ];

  const trainingPartners = [
    {
      name: "SIFAST",
      logo: "/partners/ste/si-fast.png",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      {/* Schools Section */}
      <FadeIn>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-6">Partner Schools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {schools.map((school) => (
              <div key={school.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="relative h-24">
                  <Image
                    src={school.logo}
                    alt={school.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#0B2C67] dark:text-white mt-4">{school.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* Training Partners Section */}
      <FadeIn delay={0.2}>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-6">Training Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingPartners.map((partner) => (
              <div key={partner.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="relative h-24">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-[#0B2C67] dark:text-white mt-4">{partner.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </div>
  );
}