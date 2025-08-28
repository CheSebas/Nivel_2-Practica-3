export default function Details() {
  const details = [
    {
      title: "A creative team which builds stunning UI/UX",
      desc1:
        "Today, I'd like to show you some incredible Sign Up screen app UI ideas and concepts that offer a modern user experience. The most stunning, cutting-edge UI/UX.",
      desc2:
        "Klean is an elegant HTML5 template and a perfect starting point for your next SaaS oriented site, carefully curated by ThemeWagon.",
      img: "/themewagon/3.details/illustration3.png",
    },
    {
      title: "Devoted to defining the cutting edge.",
      desc1:
        '"This new creation is cutting-edge technology," says the researcher, "whose study originates from a business at the forefront of space science."',
      desc2:
        "Klean is a free Bootstrap 5 template for multipurpose landing pages. This design is a perfect choice, carefully curated by ThemeWagon.",
      img: "/themewagon/3.details/illustration6.png",
      reverse: true,
    },
  ];

  return (
    <section className="relative section overflow-hidden py-25">
      {/* Fondos decorativos */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/themewagon/3.details/illustration1.png')",
        }}
      />
      <div
        className="absolute inset-0 bg-no-repeat bg-contain bg-left-top opacity-40"
        style={{
          backgroundImage: "url('/themewagon/3.details/illustration2.png')",
        }}
      />

      <div className="container relative">
        {details.map((d, i) => (
          <div
            key={i}
            className={`grid gap-8 items-center py-12 lg:py-20 lg:grid-cols-2 ${
              d.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Imagen */}
            <div className="flex justify-center">
              <div className="rounded-2xl border-2 border-transparent bg-transparent p-4">
                <img
                  src={d.img}
                  alt={d.title}
                  className="w-80 h-auto object-contain rounded-xl"
                />
              </div>
            </div>

            {/* Texto */}
            <div className={`${d.reverse ? "lg:order-first" : ""}`}>
              <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
                {d.title}
              </h2>
              <p className="text-gray-600 mb-3">{d.desc1}</p>
              <p className="text-gray-600 mb-5">{d.desc2}</p>
              <button className="px-6 py-3 border-2 rounded-xl text-primary font-semibold hover:bg-gray-50 transition">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
