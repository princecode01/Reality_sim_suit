import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black py-5 w-full mt-auto">
      <div className="w-3/4 mx-auto flex items-center justify-between">
        <h2 className="text-white text-xl">Reality SimSuit</h2>

        <div className="flex items-center gap-y-2">
          <a
            target="_blank"
            href="https://example.com"
            className="text-white mr-4"
          >
            <FaTwitter className="h-6 w-6" />
          </a>
          <a
            target="_blank"
            href="https://example.com"
            className="text-white mr-4"
          >
            <FaFacebook className="h-6 w-6" />
          </a>
          <a
            target="_blank"
            href="https://example.com"
            className="text-white mr-4"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
          <a target="_blank" href="https://example.com" className="text-white">
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
