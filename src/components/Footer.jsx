import { Link } from "react-router-dom";
import { Zap, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#071B2C] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="rounded-lg bg-green-500 p-2 text-slate-950">
              <Zap size={22} />
            </span>
            <span className="text-xl font-black">
              Power China Engineering Comapany
            </span>
          </Link>

          <p className="mt-4 max-w-md leading-7 text-slate-400">
            Delivering dependable power solutions and supporting a more
            sustainable energy future for businesses and communities.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Quick Links</h3>
          <div className="flex flex-col items-start gap-3 text-sm text-slate-400">
            <Link className="hover:text-green-400" to="/">
              Home
            </Link>
            <Link className="hover:text-green-400" to="/about">
              About Us
            </Link>
            <Link className="hover:text-green-400" to="/services">
              Services
            </Link>
            <Link className="hover:text-green-400" to="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 font-bold">Our Focus</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>Power Generation</li>
            <li>Electrical Infrastructure</li>
            <li>Renewable Energy</li>
            <li>Technical Maintenance</li>
          </ul>
          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-green-400 hover:text-green-300"
          >
            Talk to our team <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>
            © {new Date().getFullYear()} Power China Engineering Comapany. Demo
            website.
          </p>
          <p>Powering progress, responsibly.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
