import FadeIn from "@/components/FadeIn";

export default function Criteria() {
  return (
    <div className="container mx-auto py-12">
      <FadeIn>
        <h1 className="text-4xl font-bold mb-8 text-[#0B2C67] dark:text-white">Admission Criteria</h1>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <ul className="space-y-4 text-gray-600 dark:text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              High school diploma or equivalent
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Strong background in mathematics and physics
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Proficiency in French and English
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              Letters of recommendation
            </li>
          </ul>
        </div>
      </FadeIn>
    </div>
  );
}