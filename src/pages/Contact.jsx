export default function Contact() {
  return (
    <>
      {/* Header Section */}
      <section className="section text-center">
        <div className="container py-16">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="relative section">
        {/* Fondos decorativos */}
        <div
          className="absolute bottom-0 left-0 w-full h-full bg-no-repeat bg-left-bottom opacity-20 pointer-events-none"
          style={{
            backgroundImage: "url('/themewagon/contact/contact-us-bg.png')",
          }}
        />
        <div
          className="absolute right-0 top-0 w-full h-full bg-no-repeat bg-contain opacity-20 pointer-events-none"
          style={{
            backgroundImage: "url('/themewagon/7.contact/image1.png')",
          }}
        />

        <div className="container relative grid gap-12 lg:grid-cols-2 items-start">
          {/* Formulario */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <form className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Write your name"
                  className="w-full rounded-full border px-4 py-3 pr-10"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  👤
                </span>
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Write your email"
                  className="w-full rounded-full border px-4 py-3 pr-10"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  ✉️
                </span>
              </div>
              <div className="relative">
                <textarea
                  placeholder="Write your message"
                  className="w-full rounded-xl border px-4 py-3 min-h-[150px] pr-10"
                />
                <span className="absolute right-3 top-4 text-gray-400">✏️</span>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Info de contacto */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-pink-500 text-xl">📞</div>
              <div>
                <p className="font-bold">Phone</p>
                <p className="text-gray-700">+880124332334</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-pink-500 text-xl">📧</div>
              <div>
                <p className="font-bold">Email</p>
                <p className="text-gray-700">something@email.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-pink-500 text-xl">📍</div>
              <div>
                <p className="font-bold">Location</p>
                <p className="text-gray-700">
                  43/A Spooner Street,
                  <br /> St laurence, Virginia,
                  <br /> Texas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
