import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Target,
  Eye,
  Leaf,
  Users,
} from "lucide-react";

import SectionTitle from "../components/SectionTitle";

const values = [
  {
    icon: ShieldCheck,
    title: "Safety First",
    text: "We place safety, responsible engineering, and risk awareness at the center of our approach.",
  },
  {
    icon: Target,
    title: "Quality",
    text: "We focus on thoughtful planning, consistent standards, and dependable solutions.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    text: "We encourage efficient energy use and practical approaches to cleaner power.",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "We believe strong partnerships and clear communication lead to better outcomes.",
  },
];

const About = () => {
  return (
    <div>
      <section className="bg-[#071B2C] px-5 py-20 text-white sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold tracking-[0.2em] text-green-400 uppercase">
            About Our Company
          </p>
          <h1 className="max-w-3xl text-4xl leading-tight font-black sm:text-5xl lg:text-6xl">
            Building a More Reliable Energy Future
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            We are committed to showcasing dependable electrical solutions,
            modern infrastructure, and sustainable energy opportunities.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1100&q=85"
              alt="Energy infrastructure in a green environment"
              className="h-[350px] w-full rounded-3xl object-cover sm:h-[450px]"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-bold tracking-[0.18em] text-green-600 uppercase">
              Who We Are
            </p>
            <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">
              Engineering Energy With Purpose
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              PowerGrid is a sample power-sector company website built to
              demonstrate how a business can present its energy services,
              technical capabilities, and commitment to responsible growth.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Our example focuses on electricity infrastructure, renewable
              energy, technical maintenance, and customer collaboration.
            </p>

            <Link
              to="/services"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white hover:bg-green-700"
            >
              Explore Our Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Our Purpose"
            title="Mission, Vision & Values"
            description="The principles that guide the example company's approach to energy and infrastructure."
          />

          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-[#071B2C] p-8 text-white">
              <Target size={32} className="text-green-400" />
              <h3 className="mt-5 text-2xl font-bold">Our Mission</h3>
              <p className="mt-3 leading-7 text-slate-300">
                To promote dependable power solutions through quality-focused
                engineering, responsible planning, and customer collaboration.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-8">
              <Eye size={32} className="text-green-600" />
              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Our Vision
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                To contribute to an energy future that is more efficient,
                resilient, accessible, and sustainable.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <Icon size={30} className="text-green-600" />
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
