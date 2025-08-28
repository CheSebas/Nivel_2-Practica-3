export default function Features() {
  const features = [
    {
      title: "Encrypted Mail",
      desc: "A process of encrypting email communications",
      img: "themewagon/4.features/icon1.png",
      color: "red",
    },
    {
      title: "Display Sharing",
      desc: "With other participants, you may share your screen",
      img: "themewagon/4.features/icon2.png",
      color: "blue",
    },
    {
      title: "Private Notebook",
      desc: "Private Notebook is an application that is protected",
      img: "themewagon/4.features/icon3.png",
      color: "yellow",
    },
    {
      title: "App Assistance",
      desc: "App Assistant is quickly and effectively ran the system",
      img: "themewagon/4.features/icon4.png",
      color: "green",
    },
    {
      title: "Multiple Printing",
      desc: "Our canvas prints are crafted on top-notch canvas.",
      img: "themewagon/4.features/icon5.png",
      color: "purple",
    },
    {
      title: "Free Sketch",
      desc: "Our canvas prints are crafted on top-notch canvas.",
      img: "themewagon/4.features/icon6.png",
      color: "cyan",
    },
  ];

  const colorClasses = {
    red: "bg-red-100 text-red-600 shadow-red-200",
    blue: "bg-blue-100 text-blue-600 shadow-blue-200",
    yellow: "bg-yellow-100 text-yellow-600 shadow-yellow-200",
    green: "bg-green-100 text-green-600 shadow-green-200",
    purple: "bg-purple-100 text-purple-600 shadow-purple-200",
    cyan: "bg-cyan-100 text-cyan-600 shadow-cyan-200",
  };

  return (
    <section className="relative section bg-white overflow-hidden py-25">
      {/* Fondo decorativo */}
      <div
        className="absolute top-0 right-0 w-full h-full bg-no-repeat bg-right bg-contain opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('themewagon/4.features/feature-bg.png')",
        }}
      />

      <div className="container relative">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mt-7 mb-12">
          <h2 className="text-3xl font-bold mb-4">Features</h2>
          <p className="text-gray-600">
            We provide a number of excellent features that will undoubtedly
            improve the user experience. We also provide a better support
            system.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 py-10">
          {features.map((f, i) => (
            <div key={i} className="text-center px-4">
              {/* Icon wrapper */}
              <div
                className={`w-16 h-16 mx-auto flex items-center justify-center rounded-lg shadow-md ${colorClasses[f.color]}`}
              >
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
