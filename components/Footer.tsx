import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#101928] text-white py-12 px-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row-reverse md:justify-between gap-8">
          {/* Contact Information */}
          <div>
            <h4 className="text-[20px] font-semibold ">Contact Us</h4>
            <ul className="space-y-2 mt-[10px">
              <li>
                <p className="text-[#94969C] text-[16px]">
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
                <p className="text-[#94969C] text-[16px] mt-[24px]">
                  {" "}
                  NET-ZERO
                </p>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div>
            <Logo color="F7F9FC" />
            {/* <h3 className="text-xl font-semibold mb-4">Follow Us</h3> */}
            <div title="social-icons" className="flex space-x-4 mt-[32px]">
              <Link
                href="https://web.facebook.com/ojigbo.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#85888E] hover:text-yellow-500 transition duration-300"
              >
                <FaFacebookF size={20} />
              </Link>
              <Link
                href="https://x.com/LeoOjigbo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#85888E] hover:text-yellow-500 transition duration-300"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/iroro1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#85888E] hover:text-yellow-500 transition duration-300"
              >
                <FaLinkedinIn size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/iroro1/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#85888E] hover:text-yellow-500 transition duration-300"
              >
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-4 md:flex md:justify-between md:items-center mt-[32px] border-t border-gray-800 pt-[32px]">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Spend Guard. All rights reserved.
          </p>

          <div className="flex space-x-[32px]">
            <Link
              className="text-[#94969C] hover:text-[#94969C]/90 transition duration-300"
              href="/privacy"
            >
              Privacy
            </Link>
            <Link
              className="text-[#94969C] hover:text-[#94969C]/90 transition duration-300"
              href="/terms-and-conditions"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
