export default function Clubs() {
    const clubs = [
      {
        name: "Robotics Club",
        description: "Explore the world of robotics through hands-on projects and competitions.",
      },
      {
        name: "Coding Club",
        description: "Learn and practice coding skills with fellow students.",
      },
      {
        name: "Environmental Club",
        description: "Promote sustainability and environmental awareness on campus.",
      },
    ];
  
    return (
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8 text-[#0B2C67] dark:text-white">Student Clubs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clubs.map((club) => (
            <div key={club.name} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-[#0B2C67] dark:text-white mb-4">{club.name}</h2>
              <p className="text-gray-600 dark:text-gray-300">{club.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }