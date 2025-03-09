import FadeIn from "@/components/FadeIn";

export default function Admission() {
  return (
    <div className="container mx-auto py-12">
      {/* Admission Criteria */}
      <FadeIn>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-6">Admission Criteria</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            L’admission à l’IPSAS se fait sur la base de concours ou de dossiers de candidature, selon le programme choisi. Les candidats doivent répondre à des critères académiques spécifiques et peuvent passer des tests d&apos;aptitude.
          </p>
        </section>
      </FadeIn>

      {/* Fees Section */}
      <FadeIn delay={0.2}>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-6">Tuition Fees</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            Les frais de scolarité varient selon le programme et le niveau d&apos;études. Veuillez consulter notre site web pour plus de détails.
          </p>
        </section>
      </FadeIn>

      {/* FAQ Section */}
      <FadeIn delay={0.4}>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-6">FAQ</h2>
          <div className="space-y-6">
            {[
              {
                question: "Qu'est-ce que l'IPSAS ?",
                answer: "L'IPSAS est un établissement d'enseignement supérieur offrant des formations dans des domaines techniques et scientifiques.",
              },
              {
                question: "Quels types de formations propose l'IPSAS ?",
                answer: "L'IPSAS propose des formations en ingénierie, en sciences appliquées, en management et en technologies avancées.",
              },
            ].map((faq) => (
              <div key={faq.question} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-[#0B2C67] dark:text-white mb-2">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>
    </div>
  );
}