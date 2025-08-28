export default function Projects() {
  const projects = [
    "themewagon/5.projects/image1.png",
    "themewagon/5.projects/image2.png",
    "themewagon/5.projects/image3.png",
    "themewagon/5.projects/image4.png",
    "themewagon/5.projects/image5.png",
    "themewagon/5.projects/image6.png",
  ];

  return (
    <section className="relative section bg-white overflow-hidden py-25">
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
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border border-white shadow-lg rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .reduce((cols, project, index) => {
                  if (index % 2 === 0) {
                    cols.push([project, projects[index + 1]]);
                  }
                  return cols;
                }, [])
                .map((pair, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center"
                  >
                    <img
                      src={pair[0]}
                      alt={`project-${i * 2 + 1}`}
                      className="mb-3 md:mb-3 lg:mb-3 img-fluid w-80 max-w-full"
                    />
                    {pair[1] && (
                      <img
                        src={pair[1]}
                        alt={`project-${i * 2 + 2}`}
                        className="mb-3 md:mb-0 img-fluid w-80 max-w-full"
                      />
                    )}
                  </div>
                ))}
            </div>
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
