export default function FAQ() {
    const faqs = [
      {
        question: "What are the admission requirements?",
        answer: "You need a high school diploma and proficiency in French and English.",
      },
      {
        question: "How do I apply?",
        answer: "Complete the online application form and submit required documents.",
      },
    ];
  
    return (
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8 text-[#0B2C67] dark:text-white">Admission FAQ</h1>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <div key={faq.question} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-[#0B2C67] dark:text-white mb-2">{faq.question}</h2>
              <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }