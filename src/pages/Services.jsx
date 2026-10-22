import {
  Zap,
  Network,
  Sun,
  Wrench,
  Factory,
  Lightbulb,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
const services = [
  {
    icon: Zap,
    title: "Power Generation",
    description:
      "Electricity generation solutions and support for reliable power supply across commercial and industrial applications.",
  },
  {
    icon: Network,
    title: "Transmission & Distribution",
    description:
      "Electrical network planning, infrastructure support, and distribution system solutions.",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    description:
      "Solar power integration, renewable energy planning, and energy-efficiency opportunities.",
  },
  {
    icon: Wrench,
    title: "Electrical Maintenance",
    description:
      "Preventive maintenance planning, equipment inspections, and electrical troubleshooting.",
  },
  {
    icon: Factory,
    title: "Industrial Solutions",
    description:
      "Electrical systems and power solutions tailored to the needs of industrial facilities.",
  },
  {
    icon: Lightbulb,
    title: "Energy Efficiency",
    description:
      "Practical ways to review energy consumption and improve the efficiency of electrical systems.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "We begin by understanding your goals, facility, and power requirements.",
  },
  {
    number: "02",
    title: "Plan",
    text: "We outline a suitable approach based on technical needs and project scope.",
  },
  {
    number: "03",
    title: "Deliver",
    text: "We plan implementation around quality, safety, and clear communication.",
  },
];
const Services = () => {
  return (
    <div>
      <section className="bg-[#071B2C] px-5 py-20 text-white sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-bold tracking-[0.2em] text-green-400 uppercase">
            Our Services
          </p>
          <h1 className="max-w-3xl text-4xl leading-tight font-black sm:text-5xl lg:text-6xl">
            Complete Power Solutions for a Changing World
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Explore power generation, electrical infrastructure, renewable
            energy, and technical support services in one place.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-500 px-6 py-4 font-bold text-slate-950 hover:bg-green-400"
          >
            Discuss Your Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="What We Offer"
            title="Our Energy Services"
            description="A flexible range of example service categories for a power-sector company."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                number={`0${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Our Approach"
            title="From Planning to Progress"
            description="A straightforward process helps keep project requirements clear from the start."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {process.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-slate-200 p-7"
              >
                <span className="text-4xl font-black text-green-600/30">
                  {step.number}
                </span>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-50 px-5 py-12 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-2xl border border-green-100 bg-white p-7 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-1 shrink-0 text-green-600" size={30} />
            <div>
              <h2 className="text-xl font-bold text-slate-900">
                Planning an energy project?
              </h2>
              <p className="mt-2 leading-7 text-slate-600">
                Contact us to discuss your technical requirements and goals.
              </p>
            </div>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white hover:bg-green-700"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
