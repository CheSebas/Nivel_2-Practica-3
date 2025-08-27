export default function Projects() {
  const projects = [
    "/themewagon/5.projects/image1.png",
    "/themewagon/5.projects/image2.png",
    "/themewagon/5.projects/image3.png",
    "/themewagon/5.projects/image4.png",
    "/themewagon/5.projects/image5.png",
    "/themewagon/5.projects/image6.png",
  ];

  return (
    <section className="relative section bg-white overflow-hidden">
      {/* Fondo decorativo */}
      <div
        className="absolute top-0 right-0 w-full h-full bg-no-repeat bg-right bg-contain opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('/themewagon/projects/project-bg.png')",
        }}
      />

      <div className="container relative">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 py-16">
          <h2 className="text-3xl font-bold mb-4">Our Projects</h2>
          <p className="text-gray-600">
            A project is a single or team activity, combining research and
            design with best effort. Here are some of our team's projects.
          </p>
        </div>

        {/* Card contenedor con proyectos */}
        <div className="bg-white shadow-lg rounded-2xl p-6 mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((src, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={src}
                  alt={`project-${i + 1}`}
                  className="rounded-xl mb-4 w-80 max-w-full"
                />
                {/* segundo proyecto en la misma columna */}
                {projects[i + 1] && i % 2 === 0 && (
                  <img
                    src={projects[i + 1]}
                    alt={`project-${i + 2}`}
                    className="rounded-xl w-80 max-w-full"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Botón View More */}
        <div className="text-center mt-10">
          <button className="px-6 py-3 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 border-2 border-current rounded-lg hover:scale-105 transition">
            View More
          </button>
        </div>
      </div>
    </section>
  );
}
