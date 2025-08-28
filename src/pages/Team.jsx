const people = [
  {
    name: "John Adams",
    role: "CEO",
    image: "themewagon/6.team/image1.png",
    shadow: "shadow-square-right",
  },
  {
    name: "Carrey Johnson",
    role: "Senior Developer",
    image: "themewagon/6.team/image2.png",
    shadow: "shadow-square-left",
  },
  {
    name: "Ray Marie",
    role: "Developer",
    image: "themewagon/6.team/image3.png",
    shadow: "shadow-square-right",
  },
  {
    name: "Austin Min",
    role: "Designer",
    image: "themewagon/6.team/image4.png",
    shadow: "shadow-square-left",
  },
];

export default function Team() {
  return (
    <section className="relative section bg-white overflow-hidden py-25">
      <div className="container relative">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-600">
            People from various origins, cultures, and personalities make up our
            team. This blend makes it a powerful team.
          </p>
        </div>

        {/* Grid de personas */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {people.map((p, i) => (
            <div key={p.name} className="text-center">
              <div
                className={`relative w-48 h-48 mx-auto rounded-xl overflow-hidden shadow-lg ${
                  i % 2 === 0 ? "rotate-2" : "-rotate-2"
                }`}
              >
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{p.name}</h3>
              <p className="text-gray-600">{p.role}</p>
            </div>
          ))}
        </div>

        {/* Botón View Full Team */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 border-2 border-current rounded-lg hover:scale-105 transition">
            View Full Team
          </button>
        </div>
      </div>
    </section>
  );
}
