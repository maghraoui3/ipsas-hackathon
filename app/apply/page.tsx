import FadeIn from "@/components/FadeIn"

export default function Apply() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#0B2C67] dark:text-white">Apply to IPSAS</h1>

        <FadeIn>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Thank you for your interest in joining IPSAS. The application process for the upcoming academic year will open soon. Please check back later or leave your contact information to be notified when applications open.
            </p>

            <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 mb-8">
              <p className="text-yellow-700 dark:text-yellow-200">
                Applications for the 2024-2025 academic year will open in June 2024.
              </p>
            </div>

            <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-6">Admission Requirements</h2>
            <ul className="space-y-4 text-gray-600 dark:text-gray-300 mb-8">
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

            <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-6">Application Process</h2>
            <ol className="list-decimal list-inside space-y-4 text-gray-600 dark:text-gray-300 mb-8 pl-4">
              <li>Complete the online application form</li>
              <li>Submit required documents</li>
              <li>Pay application fee</li>
              <li>Attend entrance examination</li>
              <li>Interview (if selected)</li>
            </ol>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-[#0B2C67] dark:text-white mb-4">Required Documents</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• Official transcripts</li>
                <li>• Copy of passport or ID</li>
                <li>• Passport-size photograph</li>
                <li>• Language proficiency certificates</li>
                <li>• Letters of recommendation</li>
              </ul>
            </div>

            <div className="flex justify-center">
              <button
                disabled
                className="bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 px-6 py-3 rounded-lg cursor-not-allowed"
              >
                Applications Opening Soon
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}