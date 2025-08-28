import { FaArrowRight } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      title: "Send Texts Instantly",
      desc: "Financial planning, forecasting and adjusting rapidly with customer demands and budgets.",
      icon: "themewagon/2.services/icon1.png",
    },
    {
      title: "Better Organized",
      desc: "Latest technology and experienced guidance, trained HR specialists to keep updated.",
      icon: "themewagon/2.services/icon2.png",
    },
    {
      title: "Analytical Statistics",
      desc: "Messages, real-time reminders, memos, and many more will keep your team in sync.",
      icon: "themewagon/2.services/icon3.png",
    },
  ];

  return (
    <section
      className="relative section overflow-hidden bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('themewagon/2.services/illustration1.png')",
      }}
    >
      <div className="bg-white/80 backdrop-blur-sm py-25">
        <div className="container relative">
          <div className="container relative z-10">
            {/* Header */}
            <div className="max-w-2xl mx-auto text-center py-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Service</h2>
              <p className="text-gray-600">
                We offer youth with chances for career development in their
                practice. We also support a wide range of services to ensure
                client satisfaction.
              </p>
            </div>

            {/* Grid de services */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl border border-white/30 bg-white/50 backdrop-blur-md shadow-sm hover:shadow-md transition"
                >
                  <div className="text-center">
                    <img
                      src={s.icon}
                      alt={s.title}
                      className="mx-auto my-8 w-20 h-20"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-center md:text-left">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm text-center md:text-left">
                    {s.desc}
                  </p>
                  <a
                    href="#!"
                    className="mt-4 inline-flex items-center text-primary font-medium text-sm hover:underline"
                  >
                    Learn more
                    <FaArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
