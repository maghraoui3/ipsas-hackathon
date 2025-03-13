import FadeIn from "@/components/FadeIn";

export default function License() {
  return (
    <div className="container mx-auto py-12">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-8 text-[#0B2C67] dark:text-white">Licenses</h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
          L&apos;institut polytechnique des Sciences Avancées de Sfax (Tunisie) a obtenu les licences pour les établissements d&apos;enseignement.
        </p>
      </FadeIn>
      <FadeIn delay={0.4}>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <ul className="space-y-4 text-gray-600 dark:text-gray-300">
            <li>1 licence pour HARDLOCK</li>
            <li>10 licences pour PROSPER 64 Bit, GAP 64 Bit, PVTP 64 Bit, MBAL 64 Bit, REVEAL 64 Bit, RESOLVE 64 Bit</li>
          </ul>
        </div>
      </FadeIn>
    </div>
  );
}