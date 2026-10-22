import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Factory,
  Network,
  Sun,
  Wrench,
  Zap,
} from "lucide-react";

import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";

const services = [
  {
    icon: Zap,
    title: "Power Generation",
    description:
      "Dependable electricity generation solutions designed for industrial and commercial needs.",
  },
  {
    icon: Network,
    title: "Transmission & Distribution",
    description:
      "Modern electrical infrastructure that helps deliver power safely and efficiently.",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    description:
      "Solar and clean-energy solutions for a more sustainable tomorrow.",
  },
  {
    icon: Wrench,
    title: "Technical Maintenance",
    description:
      "Preventive maintenance and technical support for electrical systems and equipment.",
  },
];

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80",
    category: "Infrastructure",
    title: "Electrical Infrastructure",
    location: "Illustrative project · Power networks",
  },
  {
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
    category: "Solar Energy",
    title: "Solar Power Solutions",
    location: "Illustrative project · Renewable energy",
  },
  {
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80",
    category: "Wind Energy",
    title: "Clean Energy Development",
    location: "Illustrative project · Wind generation",
  },
];

const benefits = [
  "Safety-first engineering practices",
  "Energy-efficient solutions",
  "Reliable technical support",
  "Sustainable project planning",
];
const Home = () => {
  return (
    <div>
      {/* Hero section */}
      <section className="relative isolate overflow-hidden bg-[#071B2C] text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top_right,_#14532d_0%,_transparent_45%)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071B2C] via-[#071B2C]/95 to-[#071B2C]/45" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:py-24 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-300">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Energy for a changing world
            </div>

            <h1 className="max-w-2xl text-4xl leading-tight font-black tracking-tight sm:text-5xl lg:text-6xl">
              Reliable Energy.
              <span className="mt-2 block text-green-400">
                A Brighter Tomorrow.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Empowering industries and communities through dependable power
              solutions, smarter infrastructure, and cleaner energy.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-xl bg-green-500 px-6 py-4 font-bold text-slate-950 transition hover:bg-green-400"
              >
                Explore Our Services <ArrowRight size={19} />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-4 font-semibold transition hover:bg-white/10"
              >
                Discover Our Company <ArrowUpRight size={18} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-green-400" />
                Safety-focused
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-green-400" />
                Future-ready
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-green-500/10 blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=85"
              alt="Electricity transmission infrastructure at sunset"
              className="relative h-[340px] w-full rounded-3xl border border-white/10 object-cover shadow-2xl sm:h-[460px]"
            />
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-10 lg:grid-cols-4 lg:px-8">
          {[
            ["24/7", "Support philosophy"],
            ["Safety", "First approach"],
            ["Clean", "Energy focus"],
            ["Smart", "Power solutions"],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-black text-green-600">{value}</p>
              <p className="mt-2 text-sm text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="What We Do"
            title="Powering Every Possibility"
            description="From reliable electrical infrastructure to renewable energy, explore our core service areas."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                number={`0${index + 1}`}
              />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-bold text-green-700 hover:text-green-800"
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="bg-white px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1100&q=85"
              alt="Clean energy infrastructure and green landscape"
              loading="lazy"
              className="h-[340px] w-full rounded-3xl object-cover sm:h-[440px]"
            />
            <div className="absolute bottom-5 left-5 rounded-xl bg-white p-4 shadow-xl sm:bottom-8 sm:left-8">
              <p className="text-sm font-bold text-slate-900">
                Engineering a better future
              </p>
              <p className="mt-1 text-sm text-slate-500">
                Reliability meets sustainability
              </p>
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-bold tracking-[0.18em] text-green-600 uppercase">
              About Power China Engineering Comapany
            </p>
            <h2 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Energy Solutions Built Around Your Needs
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              We aim to help businesses and communities access dependable
              electrical solutions. Our approach combines technical thinking,
              responsible planning, and a commitment to safety.
            </p>

            <div className="mt-7 space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 size={21} className="shrink-0 text-green-600" />
                  <span className="font-medium text-slate-700">{benefit}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#071B2C] px-6 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              Learn About Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-slate-50 px-5 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Our Work"
            title="Solutions That Move Us Forward"
            description="Explore sample project categories that demonstrate the kind of work a power sector company can showcase."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#071B2C] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500 text-slate-950">
              <Factory size={28} />
            </div>
            <h2 className="text-3xl font-black text-white sm:text-4xl">
              Let's Power Your Next Project
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              Have an energy project in mind? Let's discuss your requirements
              and explore the right solution together.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-500 px-6 py-4 font-bold text-slate-950 transition hover:bg-green-400"
            >
              Contact Our Team <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
