import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaRegEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative pt-10">
      {/* Fondo decorativo */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('themewagon/footer/image1.png')" }}
      />

      {/* Contenido */}
      <div className="relative container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 pb-10 border-b">
          {/* About */}
          <div>
            <h5 className="text-gray-700 font-bold mb-3">About</h5>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <a href="#!" className="hover:text-gray-700">
                  Prices
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-gray-700">
                  About
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-gray-700">
                  Resources
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-gray-700">
                  Team
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-gray-700">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h5 className="text-gray-700 font-bold mb-3">Resources</h5>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <a href="#!" className="hover:text-gray-700">
                  Terms
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-gray-700">
                  Help
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-gray-700">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Team */}
          <div>
            <h5 className="text-gray-700 font-bold mb-3">Team</h5>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <a href="#!" className="hover:text-gray-700">
                  Developer
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-gray-700">
                  Designer
                </a>
              </li>
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h5 className="text-gray-700 font-bold mb-3">Blog</h5>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>
                <a href="#!" className="hover:text-gray-700">
                  CEO
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-gray-700">
                  Lifestyle
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-gray-700">
                  Article
                </a>
              </li>
              <li>
                <a href="#!" className="hover:text-gray-700">
                  Tech
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us + Newsletter */}
          <div>
            <h5 className="text-gray-700 font-bold mb-3">Follow Us</h5>
            <div className="flex gap-3 mb-4">
              <a href="#!" className="hover:text-blue-600">
                <FaFacebookF />
              </a>
              <a href="#!" className="hover:text-sky-400">
                <FaTwitter />
              </a>
              <a href="#!" className="hover:text-blue-700">
                <FaLinkedinIn />
              </a>
              <a href="#!" className="hover:text-red-600">
                <FaYoutube />
              </a>
            </div>
            <p className="font-semibold mb-2">Subscribe to our newsletter</p>
            <form className="relative">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-full border border-gray-300 py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <FaRegEnvelope className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between py-4 text-xs text-gray-500">
          <p className="font-semibold">
            All rights Reserved © My Company, 2025
          </p>
          <p className="flex items-center gap-1">
            Made with
            <a
              href="https://github.com/CheSebas/Nivel_2-Practica-3"
              className="font-bold hover:underline"
              target="_blank"
            >
              React & Tailwind
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
