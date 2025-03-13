export default function Mission() {
  return (
    <div className="container mx-auto py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#0B2C67] dark:text-white">Mission, Vision & Values</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-6">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            To educate and empower the next generation of engineering leaders through innovative teaching, cutting-edge research, and strong industry partnerships, contributing to the technological advancement and economic development of Tunisia and beyond.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-6">Our Vision</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            To be recognized globally as a leading institution in engineering education and research, known for producing innovative, ethical, and socially responsible engineers who drive positive change in their communities and industries.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#0B2C67] dark:text-white mb-3">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Pursuing the highest standards in education, research, and professional practice.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#0B2C67] dark:text-white mb-3">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Fostering creativity and pioneering solutions to engineering challenges.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#0B2C67] dark:text-white mb-3">Integrity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Maintaining the highest ethical standards in all our endeavors.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#0B2C67] dark:text-white mb-3">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Building strong partnerships and fostering teamwork across disciplines.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}