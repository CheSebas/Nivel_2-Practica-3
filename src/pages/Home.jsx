export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gray-50 py-25">
        {/* Fondos decorativos */}
        <div
          className="hidden md:block absolute inset-0 bg-no-repeat bg-right-bottom bg-contain"
          style={{
            backgroundImage: "url('/themewagon/1.home/illustration1.png')",
          }}
        />
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-40"
          style={{
            backgroundImage: "url('/themewagon/1.home/heroheader-bg.png')",
          }}
        />

        <div className="relative container grid gap-8 md:grid-cols-2 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Bootstrap 5 theme
            </h1>
            <h2 className="mt-2 text-gray-700 text-2xl md:text-3xl">
              crafted by <span className="font-bold">ThemeWagon</span>
            </h2>
            <p className="mt-4 text-gray-600 max-w-lg mx-auto md:mx-0">
              ThemeWagon ofrece una amplia colección de plantillas HTML
              Bootstrap gratuitas y premium, cuidadosamente diseñadas para
              múltiples categorías.
            </p>
            <div className="mt-6">
              <a
                href="#!"
                className="inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold shadow-lg hover:-translate-y-1 transition"
              >
                Check Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="relative py-10">
        <div className="container relative flex flex-wrap justify-center items-center gap-12 opacity-80 py-12">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c7d9f5] to-transparent" />

          {/* Logos */}
          <img
            src="/themewagon/1.home/google.png"
            alt="Google"
            className="h-14 md:h-16"
          />
          <img
            src="/themewagon/1.home/netflix.png"
            alt="Netflix"
            className="h-14 md:h-16"
          />
          <img
            src="/themewagon/1.home/microsoft.png"
            alt="Microsoft"
            className="h-14 md:h-16"
          />
          <img
            src="/themewagon/1.home/themewagon.png"
            alt="ThemeWagon"
            className="h-14 md:h-16"
          />
          <img
            src="/themewagon/1.home/mailbuster.png"
            alt="MailBluster"
            className="h-14 md:h-16"
          />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c7d9f5] to-transparent" />
        </div>
      </section>
    </>
  );
}
