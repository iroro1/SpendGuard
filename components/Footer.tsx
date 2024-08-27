import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <p className="text-gray-400">
                  Email:{" "}
                  <a
                    href="mailto:ojigbo.pro@gmailcom"
                    className="hover:text-yellow-500"
                  >
                    ojigbo.pro@gmailcom
                  </a>
                </p>
              </li>

              <li>
                <p className="text-gray-400"> NET-ZERO</p>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div title="social-icons" className="flex space-x-4">
              <Link
                href="https://web.facebook.com/ojigbo.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition duration-300"
              >
                <FaFacebookF size={20} />
              </Link>
              <Link
                href="https://x.com/LeoOjigbo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition duration-300"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/iroro1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition duration-300"
              >
                <FaLinkedinIn size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/iroro1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition duration-300"
              >
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Spend Guard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
