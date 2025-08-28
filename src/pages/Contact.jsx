import {
  FaUser,
  FaEnvelope,
  FaRegEdit,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <>
      {/* Header Section */}
      <section className="text-center py-25" id="contact">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-lg-7 col-xxl-5 mx-auto mt-5">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Contact Us
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="relative py-12 mb-12">
        {/* Fondos decorativos */}
        <div
          className="absolute right-0 top-0 w-full h-full bg-no-repeat bg-contain opacity-70 pointer-events-none"
          style={{
            backgroundImage: "url('/themewagon/7.contact/image1.png')",
            backgroundPosition: "center right",
          }}
        />

        <div className="container relative grid gap-12 lg:grid-cols-2 items-center justify-center">
          {/* Formulario */}
          <div className="bg-white/40 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg border border-white/50">
            <form className="space-y-4">
              {/* Nombre */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Write your name"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pr-10 focus:ring focus:ring-pink-300"
                />
                <FaUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Write your email"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pr-10 focus:ring focus:ring-pink-300"
                />
                <FaEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>

              {/* Mensaje */}
              <div className="relative">
                <textarea
                  placeholder="Write your message"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 min-h-[150px] pr-10 focus:ring focus:ring-pink-300"
                />
                <FaRegEdit className="absolute right-3 top-4 text-gray-400 w-4 h-4" />
              </div>

              {/* Botón */}
              <button
                type="submit"
                className="w-full py-3 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:opacity-90 transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Info de contacto */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-md border-2 border-blue-500 text-blue-500">
                <FaPhoneAlt className="text-lg" />
              </span>
              <div>
                <p className="font-bold">Phone</p>
                <p className="text-gray-700">+880124332334</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-md border-2 border-blue-500 text-blue-500">
                <FaEnvelope className="text-lg" />
              </span>
              <div>
                <p className="font-bold">Email</p>
                <p className="text-gray-700">something@email.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-md border-2 border-blue-500 text-blue-500">
                <FaMapMarkerAlt className="text-lg" />
              </span>
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
